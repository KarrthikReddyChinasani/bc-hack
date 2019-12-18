import mongoose from "./../../connection";

const { SchemaTypes } = mongoose;

const testCasesSchema = mongoose.Schema({
  input: { type: SchemaTypes.Mixed, required: true },
  output: { type: SchemaTypes.Mixed, required: true },
  timeComplexity: { type: SchemaTypes.Number, required: true }
});

const optionsSchema = mongoose.Schema({
    option: { type: SchemaTypes.String, required: true },
    option_id: {type: SchemaTypes.Number, required: true}
})

const schema = {
  question: { type: SchemaTypes.String, required: true },
  answer: { type: SchemaTypes.Number, required: true },
  type: { type: SchemaTypes.String, required: true },
  options: [optionsSchema],
  testCases: [testCasesSchema]
};
const collectionName = "questions"; // Name of the collection of documents
const questionsSchema = mongoose.Schema(schema);
const Questions = mongoose.model(collectionName, questionsSchema);
module.exports = Questions;
