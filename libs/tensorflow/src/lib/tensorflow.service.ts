import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';

@Injectable({
  providedIn: 'root',
})
export class TensorflowService {
  constructor() {}

  public initialize() {
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

    // Generate some synthetic data for training.
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

    // Train the model using the data.
    model.fit(xs, ys).then(() => {
      // Use the model to do inference on a data point the model hasn't seen before:
      const output = model.predict(tf.tensor2d([[5]], [1, 1]));
      console.log(output);
    });
  }

  private async _getData() {
    const carsDataResponse = await fetch(
      'https://storage.googleapis.com/tfjs-tutorials/carsData.json'
    );
    const carsData = await carsDataResponse.json();
    const cleaned = carsData
      .map((car) => ({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower,
      }))
      .filter((car) => car.mpg != null && car.horsepower != null);

    return cleaned;
  }

  private _createModel() {
    // Create a sequential model
    const model = tf.sequential();

    // Add a single input layer
    model.add(tf.layers.dense({ inputShape: [1], units: 1, useBias: true }));

    // Add an output layer
    model.add(tf.layers.dense({ units: 1, useBias: true }));

    return model;
  }

  private _convertToTensor(data) {
    // Wrapping these calculations in a tidy will dispose any
    // intermediate tensors.

    return tf.tidy(() => {
      // Step 1. Shuffle the data
      tf.util.shuffle(data);

      // Step 2. Convert data to Tensor
      const inputs = data.map((d) => d.horsepower);
      const labels = data.map((d) => d.mpg);

      const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
      const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

      //Step 3. Normalize the data to the range 0 - 1 using min-max scaling
      const inputMax = inputTensor.max();
      const inputMin = inputTensor.min();
      const labelMax = labelTensor.max();
      const labelMin = labelTensor.min();

      const normalizedInputs = inputTensor
        .sub(inputMin)
        .div(inputMax.sub(inputMin));
      const normalizedLabels = labelTensor
        .sub(labelMin)
        .div(labelMax.sub(labelMin));

      return {
        inputs: normalizedInputs,
        labels: normalizedLabels,
        // Return the min/max bounds so we can use them later.
        inputMax,
        inputMin,
        labelMax,
        labelMin,
      };
    });
  }

  private async _trainModel(model, inputs, labels) {
    // Prepare the model for training.
    model.compile({
      optimizer: tf.train.adam(),
      loss: tf.losses.meanSquaredError,
      metrics: ['mse'],
    });

    const batchSize = 32;
    const epochs = 50;

    return await model.fit(inputs, labels, {
      batchSize,
      epochs,
      shuffle: true,
      callbacks: tfvis.show.fitCallbacks(
        { name: 'Training Performance' },
        ['loss', 'mse'],
        { height: 200, callbacks: ['onEpochEnd'] }
      ),
    });
  }

  private _testModel(model, inputData, normalizationData) {
    const { inputMax, inputMin, labelMin, labelMax } = normalizationData;

    // Generate predictions for a uniform range of numbers between 0 and 1;
    // We un-normalize the data by doing the inverse of the min-max scaling
    // that we did earlier.
    const [xs, preds] = tf.tidy(() => {
      const xs = tf.linspace(0, 1, 100);
      const preds = model.predict(xs.reshape([100, 1]));

      const unNormXs = xs.mul(inputMax.sub(inputMin)).add(inputMin);

      const unNormPreds = preds.mul(labelMax.sub(labelMin)).add(labelMin);

      // Un-normalize the data
      return [unNormXs.dataSync(), unNormPreds.dataSync()];
    });

    const predictedPoints = Array.from(xs).map((val, i) => {
      return { x: val, y: preds[i] };
    });

    const originalPoints = inputData.map((d) => ({
      x: d.horsepower,
      y: d.mpg,
    }));

    tfvis.render.scatterplot(
      { name: 'Model Predictions vs Original Data' },
      {
        values: [originalPoints, predictedPoints],
        series: ['original', 'predicted'],
      },
      {
        xLabel: 'Horsepower',
        yLabel: 'MPG',
        height: 300,
      }
    );
  }

  public async run() {
    // Load and plot the original input data that we are going to train on.
    const data = await this._getData();
    const values = data.map((d) => ({
      x: d.horsepower,
      y: d.mpg,
    }));

    tfvis.render.scatterplot(
      { name: 'Horsepower v MPG' },
      { values },
      {
        xLabel: 'Horsepower',
        yLabel: 'MPG',
        height: 300,
      }
    );

    // Create the model
    const model = this._createModel();
    tfvis.show.modelSummary({ name: 'Model Summary' }, model);

    // Convert the data to a form we can use for training.
    const tensorData = this._convertToTensor(data);
    const { inputs, labels } = tensorData;

    // Train the model
    await this._trainModel(model, inputs, labels);
    console.log('Done Training');

    // Make some predictions using the model and compare them to the
    // original data
    this._testModel(model, data, tensorData);
  }
}
