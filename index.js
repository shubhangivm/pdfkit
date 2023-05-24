const generateReportPDF= require('./main');
const data=require('./temp.js');

const express = require('express')
const app = express();
const fs = require('fs');

app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    generateReportPDF(data)
        .then((data) => {
            console.log(data, "----- generateReportPDF data");
            res.set("Content-Type", "application/pdf");
            res.setHeader(
              "Content-Disposition",
              "attachment; filename=" + `test.pdf`
            );
            
            res.end(data, 'binary');

            fs.writeFile('generatepdf.pdf', data, (err, data) => {
                if (err) console.log(err, "---generateReportPDF file error");
            })
        })
        .catch((e) => {
            console.log(e, "---generateReportPDF error")
        });
})

app.listen(3000, () => {
    console.log('server is listening-----')
})


// const data = {
//   type: 'table',
//   title: 'Table 1',
//   subtitle: '',
//   data: {
//     headers: [
//       { property: 'Sr. No.', label: 'Sr. No.', flex: 0.1 },
//       { property: 'Time', label: 'Time', flex: 0.2 },
//       { property: 'Min', label: 'Min', flex: 0.2 },
//       { property: 'Max', label: 'Max', flex: 0.2 },
//       { property: 'Avg', label: 'Avg', flex: 0.2 },
//     ],
//     primaryHeaders: [
//       { label: '', colStart: 0, colEnd: 1 },
//       { label: 'Chinese battery Level', colStart: 2, colEnd: 4 },
//     ],
//     data: [
//       {
//         'Sr. No.': 1,
//         Time: '19/05/2023 19:42',
//         Min: '4033.00',
//         Max: '4033.00',
//         Avg: '4033.00',
//       },
//       {
//         'Sr. No.': 2,
//         Time: '19/05/2023 19:47',
//         Min: '4033.00',
//         Max: '4033.00',
//         Avg: '4033.00',
//       },
//     ],
//   },
// };










