const moment = require('moment');
const subtitle_time = moment().utcOffset(330).format('DD-MM-YYYY HH:mm'); //.format('D MMM YYYY, h:mm:ss A');


const data = {
    title: 'Myreport Daily Test',
    subtitle: subtitle_time,
    contents: [
        // {
        //     type: 'table',
        //     title: "Title table",
        //     subtitle: "Subtitle",
        //     data:{
        //         headers: [
        //             // {
        //             //     label: "Sr. No.", width: 50,
        //             //     renderer: async (value, indexColumn, indexRow, row, rectRow, rectCell) => { return `${Number(indexRow) + 1}` }
        //             // },
        //             { label: "Time", property: 'start_time', width: 150, renderer: null },
        //             { label: "Avg", property: 'avg', width: 100, renderer: null },
        //             { label: "Min", property: 'min', width: 100, renderer: null },
        //             { label: "Max", property: 'max', width: 100, renderer: null }
        //         ],
        //         data: [{ "start_time": "2023-05-17T09:17:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:18:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:19:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:20:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:21:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:22:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:23:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:24:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:25:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:26:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:27:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:28:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:29:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:30:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:31:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:32:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:33:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:35:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:36:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:37:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:38:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:39:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:40:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:41:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:42:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:43:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:44:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:45:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:46:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:02:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:03:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:04:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:05:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:06:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:07:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:08:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:09:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:10:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:11:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:12:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:13:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:14:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:15:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:16:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:17:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:18:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:19:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:20:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:21:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:22:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:23:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:24:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:25:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:26:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:27:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:28:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:29:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:30:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:31:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:32:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:33:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:34:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:35:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:36:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:37:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:38:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:39:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:40:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:41:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:42:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:43:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:44:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:45:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:46:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:47:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:48:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:49:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:50:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:51:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:52:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:53:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:54:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:55:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:56:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:57:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:58:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:59:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:00:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:01:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:02:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:03:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:04:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:05:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:06:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:07:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:08:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:09:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:10:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:11:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:12:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:13:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:14:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:15:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:16:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:17:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:18:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:19:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:20:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:21:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:22:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:23:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:24:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:25:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:26:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:27:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:28:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:29:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:30:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:31:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:32:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:33:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:34:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:35:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:36:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:37:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:38:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:39:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:40:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:41:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:42:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:43:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:44:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:45:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:46:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:47:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:48:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:49:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:50:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:51:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:52:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:53:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:54:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:55:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:56:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:57:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:58:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T15:59:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:00:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:01:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:02:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:03:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:04:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:05:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:06:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:07:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:08:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:09:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:10:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:11:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:12:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:13:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:14:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:15:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:16:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:17:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:18:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:19:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:20:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:21:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:22:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:23:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:24:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:25:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T16:26:00Z", "avg": 4033, "min": 4033, "max": 4033 }]
        //     }

        //     // complex data   
        // },
        // {
        //   type: 'table',
        //   title: 'Table 1',
        //   subtitle: '',
        //   data: {
        //     headers: [
        //       { property: 'Sr. No.', label: 'Sr. No.', flex: 0.1 },
        //       { property: 'Time', label: 'Time', flex: 0.2 },
        //       { property: 'Min', label: 'Minaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', flex: 0.2 },
        //       { property: 'Max', label: 'Max', flex: 0.2 },
        //       { property: 'Avg', label: 'Avg', flex: 0.2 }
        //     ],
        //     secondaryHeaders: [
        //       { label: '', colStart: 0, colEnd: 1 },
        //       { label: 'ChinesebatteryLevel', colStart: 2, colEnd: 4 }
        //     ],
        //     data: [
        //       {
        //         'Sr. No.': 1,
        //         Time: '19/05/2023 19:42',
        //         Min: '4033.00',
        //         Max: '4033.00',
        //         Avg: '4033.00'
        //       },
        //       {
        //         'Sr. No.': 2,
        //         Time: '19/05/2023 19:47',
        //         Min: '4033.00',
        //         Max: '4033.00',
        //         Avg: '4033.00'
        //       },
        //       {
        //         'Sr. No.': 3,
        //         Time: '19/05/2023 19:52',
        //         Min: '4033.00',
        //         Max: '4033.00',
        //         Avg: '4033.00'
        //       },
        //       {
        //         'Sr. No.': 4,
        //         Time: '19/05/2023 19:57',
        //         Min: '4033.00',
        //         Max: '4033.00',
        //         Avg: '4033.00'
        //       },
        //       {
        //         'Sr. No.': 5,
        //         Time: '19/05/2023 20:02',
        //         Min: '4033.00',
        //         Max: '4033.00',
        //         Avg: '4033.00'
        //       }
        //     ]
        //   }
        // },
        {
            type: 'table',
            title: "Title table 1",
            subtitle: "Subtitle 1",
            data: {
                headers: [

                    { label: "Time", property: 'start_time', width: 150, renderer: null },
                    { label: "Avg", property: 'avg', width: 100, renderer: null },
                    { label: "Min", property: 'min', width: 100, renderer: null },
                    { label: "Max", property: 'max', width: 100, renderer: null }
                ],
                // complex data
                data: [{ "start_time": "2023-05-17T09:17:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:18:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:19:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:20:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:21:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:22:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:23:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:24:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:25:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:26:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:27:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:28:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:29:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:30:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:31:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:32:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:33:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:35:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:36:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:37:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:38:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:39:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:40:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:41:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:42:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:43:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:44:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:45:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:46:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:02:00Z", "avg": 4033, "min": 4033, "max": 4033 }]

            }
        },
        {
            type: 'table',
            title: "Title table 2",
            subtitle: "Subtitle 2",
            data: {
                headers: [

                    { label: "Time", property: 'start_time', width: 150, renderer: null },
                    { label: "Avg", property: 'avg', width: 100, renderer: null },
                    { label: "Min", property: 'min', width: 100, renderer: null },
                    { label: "Max", property: 'max', width: 100, renderer: null }
                ],
                // complex data
                data: [{ "start_time": "2023-05-17T09:17:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:18:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:19:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:20:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:21:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:22:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:23:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:24:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:25:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:26:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:27:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:28:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:29:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:30:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:31:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:32:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:33:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:35:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:36:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:37:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:38:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:39:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:40:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:41:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:42:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:43:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:44:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:45:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:46:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:02:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:03:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:04:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:05:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:06:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:07:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:08:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:09:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:10:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:11:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:12:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:13:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:14:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:15:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:16:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:17:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:18:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:19:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:20:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:21:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:22:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:23:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:24:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:25:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:26:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:27:00Z", "avg": 4033, "min": 4033, "max": 4033 }]

            }
        },
        {
            type: 'table',
            title: "Title table 3",
            subtitle: "Subtitle 3",
            data: {
                headers: [

                    { label: "Time", property: 'start_time', width: 150, renderer: null },
                    { label: "Avg", property: 'avg', width: 100, renderer: null },
                    { label: "Min", property: 'min', width: 100, renderer: null },
                    { label: "Max", property: 'max', width: 100, renderer: null }
                ],
                // complex data
                data: [{ "start_time": "2023-05-17T09:17:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:18:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:19:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:20:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:21:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:22:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:23:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:24:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:25:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:26:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:27:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:28:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:29:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:30:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:31:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:32:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:33:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:35:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:36:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:37:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:38:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:39:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:40:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:41:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:42:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:43:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:44:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:45:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:46:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:02:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:03:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:04:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:05:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:06:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:07:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:08:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:09:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:10:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:11:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:12:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:13:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:14:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:15:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:16:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:17:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:18:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:19:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:20:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:21:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:22:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:23:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:24:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:25:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:26:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:27:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:28:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:29:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:30:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:31:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:32:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:33:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:34:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:35:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:36:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:37:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:38:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:39:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:40:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:41:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:42:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:43:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:44:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:45:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:46:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:47:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:48:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:49:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:50:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:51:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:52:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:53:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:54:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:55:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:56:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:57:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:58:00Z", "avg": 4033, "min": 4033, "max": 4033 }]

            }
        },
        //charts
        {
            type: 'line-chart',
            title: 'History table',
            subtitle: '',
            data: {
                yKeys: ['Sat', 'TotalDistance', 'Speed'],
                xKey: 'Time',
                xAxisUnit: 'Time',
                YAxisUnit: '',
                data: [
                    {
                        Time: '19/05/2023 15:38',
                        Sat: '12.10',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 15:53',
                        Sat: '10.73',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 16:08',
                        Sat: '8.17',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 16:23',
                        Sat: '8.40',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 16:38',
                        Sat: '9.50',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 16:53',
                        Sat: '9.63',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 17:08',
                        Sat: '9.57',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 17:23',
                        Sat: '9.27',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 17:38',
                        Sat: '9.53',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 17:53',
                        Sat: '8.48',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 18:08',
                        Sat: '7.40',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 18:23',
                        Sat: '8.63',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 18:38',
                        Sat: '8.27',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 18:53',
                        Sat: '8.53',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 19:08',
                        Sat: '7.13',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 19:23',
                        Sat: '8.50',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 19:38',
                        Sat: '8.33',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 19:53',
                        Sat: '8.23',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 20:08',
                        Sat: '9.73',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 20:23',
                        Sat: '10.70',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 20:38',
                        Sat: '11.30',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 20:53',
                        Sat: '10.63',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 21:08',
                        Sat: '9.40',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 21:23',
                        Sat: '10.67',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 21:38',
                        Sat: '10.10',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 21:53',
                        Sat: '10.97',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 22:08',
                        Sat: '9.60',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 22:23',
                        Sat: '10.52',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 22:38',
                        Sat: '11.83',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 22:53',
                        Sat: '11.40',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 23:08',
                        Sat: '11.47',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 23:23',
                        Sat: '11.33',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 23:38',
                        Sat: '11.13',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '19/05/2023 23:53',
                        Sat: '11.17',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 00:08',
                        Sat: '10.17',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 00:23',
                        Sat: '9.43',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 00:38',
                        Sat: '8.67',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 00:53',
                        Sat: '9.80',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 01:08',
                        Sat: '10.07',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 01:23',
                        Sat: '8.40',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 01:38',
                        Sat: '8.20',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 01:53',
                        Sat: '9.20',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 02:08',
                        Sat: '9.00',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 02:23',
                        Sat: '9.17',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 02:38',
                        Sat: '9.67',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 02:53',
                        Sat: '10.21',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 03:08',
                        Sat: '9.57',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 03:23',
                        Sat: '9.33',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 03:38',
                        Sat: '9.07',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 03:53',
                        Sat: '9.37',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 04:08',
                        Sat: '9.50',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 04:23',
                        Sat: '8.93',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 04:38',
                        Sat: '9.13',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 04:53',
                        Sat: '9.67',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 05:08',
                        Sat: '10.40',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 05:23',
                        Sat: '8.71',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 05:38',
                        Sat: '9.80',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 05:53',
                        Sat: '12.17',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 06:08',
                        Sat: '9.93',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 06:23',
                        Sat: '8.77',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 06:38',
                        Sat: '9.30',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 06:53',
                        Sat: '9.07',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 07:08',
                        Sat: '10.23',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 07:23',
                        Sat: '10.47',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 07:38',
                        Sat: '10.03',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 07:53',
                        Sat: '9.03',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 08:08',
                        Sat: '9.03',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 08:23',
                        Sat: '10.00',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 08:38',
                        Sat: '10.00',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 08:53',
                        Sat: '10.53',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 09:08',
                        Sat: '9.20',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 09:23',
                        Sat: '8.60',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 09:38',
                        Sat: '8.53',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 09:53',
                        Sat: '7.97',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 10:08',
                        Sat: '8.37',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 10:23',
                        Sat: '7.80',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 10:38',
                        Sat: '7.83',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 10:53',
                        Sat: '7.97',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    },
                    {
                        Time: '20/05/2023 11:08',
                        Sat: '8.87',
                        TotalDistance: '16618227.38',
                        Speed: '0.00'
                    }
                ],

            }
        }
        // {
        //     type: 'table',
        //     title: "Title table",
        //     subtitle: "Subtitle",
        //     headers: [
        //         // {
        //         //     label: "Sr. No.", width: 50,
        //         //     renderer: async (value, indexColumn, indexRow, row, rectRow, rectCell) => { return `${Number(indexRow) + 1}` }
        //         // },
        //         { label: "Time", property: 'start_time', width: 150, renderer: null },
        //         { label: "Avg", property: 'avg', width: 100, renderer: null },
        //         { label: "Min", property: 'min', width: 100, renderer: null },
        //         { label: "Max", property: 'max', width: 100, renderer: null }
        //     ],
        //     // complex data
        //     datas: [{ "start_time": "2023-05-17T09:17:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:18:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:19:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:20:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:21:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:22:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:23:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:24:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:25:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:26:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:27:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:28:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:29:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:30:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:31:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:32:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:33:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:35:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:36:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:37:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:38:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:39:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:40:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:41:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:42:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:43:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:44:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:45:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T09:46:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:02:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:03:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:04:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:05:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:06:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:07:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:08:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:09:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:10:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:11:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:12:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:13:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:14:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:15:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:16:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:17:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:18:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:19:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:20:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:21:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:22:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:23:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:24:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:25:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:26:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:27:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:28:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:29:00Z", "avg": 4033, "min": 4033, "max": 4033 }, { "start_time": "2023-05-17T14:30:00Z", "avg": 4033, "min": 4033, "max": 4033 }]
        // }
    ]
}



module.exports = data;

const arrayold = [
    // {
    //     type: 'line-chart',
    //     title: "Title chart",
    //     subtitle: "Subtitle",
    //     data: {
    //         yKeys: ['ChinesebatteryLevel [Average]'],
    //         xKey: 'Time',

    //         data: [{
    //             Time: '18/05/2023 15:48',
    //             'ChinesebatteryLevel [Average]': '4033.00'
    //         },
    //         {
    //             Time: '18/05/2023 15:53',
    //             'ChinesebatteryLevel [Average]': '4033.00'
    //         },
    //         {
    //             Time: '18/05/2023 15:58',
    //             'ChinesebatteryLevel [Average]': '4033.00'
    //         },
    //         {
    //             Time: '18/05/2023 16:03',
    //             'ChinesebatteryLevel [Average]': '4033.00'
    //         },
    //         {
    //             Time: '18/05/2023 16:08',
    //             'ChinesebatteryLevel [Average]': '4033.00'
    //         },
    //         {
    //             Time: '18/05/2023 16:13',
    //             'ChinesebatteryLevel [Average]': '4033.00'
    //         },
    //         {
    //             Time: '18/05/2023 16:18',
    //             'ChinesebatteryLevel [Average]': '4033.00'
    //         },
    //         {
    //             Time: '18/05/2023 16:23',
    //             'ChinesebatteryLevel [Average]': '4033.00'
    //         },
    //         {
    //             Time: '18/05/2023 16:28',
    //             'ChinesebatteryLevel [Average]': '4033.00'
    //         },
    //         {
    //             Time: '18/05/2023 16:33',
    //             'ChinesebatteryLevel [Average]': '4033.00'
    //         },
    //         {
    //             Time: '18/05/2023 16:38',
    //             'ChinesebatteryLevel [Average]': '4033.00'
    //         }
    //         ],

    //         xAxisUnit: 'Time',
    //         yAxisUnit: 'V'
    //     }
    // },

    // {
    //     type: 'line-chart',
    //     title: "Title No data chart",
    //     subtitle: "Subtitle",
    //     data: []
    // },
    // {
    //     type: 'bar-chart',
    //     title: 'Facilities chart',
    //     subtitle: '',
    //     data: { 'facility 1': 0, 'facility 2': 2 }
    // },
    // {
    //     type: 'n-bar-chart',
    //     title: 'Alert chart',
    //     subtitle: '',
    //     data: {
    //         stack: ['medium', 'high', 'low'],
    //         data: {
    //             'Week 48': { medium: 0, high: 31, low: 0 },
    //             'Week 3': { medium: 0, high: 3, low: 0 },
    //             'Week 4': { medium: 0, high: 4, low: 0 },
    //             'Week 6': { medium: 0, high: 3, low: 0 },
    //             'Week 8': { medium: 0, high: 3, low: 0 },
    //             'Week 10': { medium: 0, high: 2, low: 0 },
    //             'Week 11': { medium: 0, high: 2, low: 0 },
    //             'Week 12': { medium: 0, high: 3, low: 0 },
    //             'Week 13': { medium: 0, high: 23, low: 0 },
    //             'Week 14': { medium: 0, high: 41, low: 0 },
    //             'Week 15': { medium: 0, high: 53, low: 0 },
    //             'Week 16': { medium: 0, high: 82, low: 0 },
    //             'Week 17': { medium: 0, high: 15, low: 0 },
    //             'Week 18': { medium: 0, high: 18, low: 0 },
    //             'Week 19': { medium: 0, high: 12, low: 0 },
    //             'Week 20': { medium: 0, high: 13, low: 0 }
    //         },
    //         yAxisUnit: 'Count',
    //         xAxisUnit: 'Time'
    //     }
    // },
    // {
    //     type: 'line-chart',
    //     title: 'Multiple sensor chart',
    //     subtitle: '',
    //     data: {
    //         yKeys: [
    //             'temp1 Sanjudevice [SanjuDevice] [Average] [Cel]',
    //             'io800 sensor Sanju [SanjuDevice] [Average] [deg C]'
    //         ],
    //         xKey: 'Time',
    //         data: [

    //         ],
    //         xAxisUnit: 'Time'
    //     }
    // },
    // {
    //     type: 'table',
    //     title: "Title table",
    //     subtitle: "Subtitle",
    //     headers: [
    //         { label: "Time", property: 'start_time', width: 150, renderer: null },
    //         { label: "Avg", property: 'avg', width: 100, renderer: null },
    //         { label: "Min", property: 'min', width: 100, renderer: null },
    //         { label: "Max", property: 'max', width: 100, renderer: null }
    //     ],
    //     // complex data
    //     datas: [{ "start_time": "2023-05-17T09:17:00Z", "avg": 4033, "min": 4033, "max": 4033 }]
    // }
]