const child_process = require('child_process');
const express = require('express');

const app = express();

app.get('/yt-dl', (req, res) => {
    
    const link = req.query.link;

    const yt_dlpArg = `yt-dlp.exe -g ${link}`;

    child_process.exec(yt_dlpArg, (error, stdout, stderr) => {
        console.log(stdout);

        if (stderr) {
            const gagal = JSON.stringify({
                'status': 'gagal',
                'kode_gagal' : stderr
            })

            console.log(stderr);
            res.send(gagal);
            return;
        }

        const berhasil = JSON.stringify({
            'status': 'berhasil',
            'link' : stdout
        })

        res.send(berhasil);
    })
})

app.listen(4000, () => {
    console.log('Listening On Port 4000')
})
