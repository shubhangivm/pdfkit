const fastq = require("fastq");
const worker = require('./export-worker');
const queue = fastq(worker, 8);

const generateReportPDF = (data) => {
    return new Promise((resolve, reject) => {
        queue.push(data, (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        })
    });
};

module.exports = generateReportPDF;