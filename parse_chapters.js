const toParse = `ਹੇਮਕੁੰਟ ਤੋਂ ਸਚਖੰਡ
Hemkunt to Sachkhand
audio/audioBooks/BhaiVirSinghJi/SriKalgidharChamatkar/01 Hemkunt to Sachkhand.mp3
59:05
ਸਚਖੰਡ ਤੋਂ ਮਾਤਲੋਕ
Sachkhand to Matlok
audio/audioBooks/BhaiVirSinghJi/SriKalgidharChamatkar/02 Sachkhand to Mat Lok.mp3 
1:09:31
ਮੇਰਾ ਬਾਲਾ ਪ੍ਰੀਤਮ
Mera Bala Pritam
audio/audioBooks/BhaiVirSinghJi/SriKalgidharChamatkar/03 Mera Bala Pritam.mp3
1:33:40
ਗੁਰੂ ਜੀ ਦਾ ਪਹਿਲਾ ਸਫ਼ਰ
Guru Ji Da Pehla Safar
audio/audioBooks/BhaiVirSinghJi/SriKalgidharChamatkar/04 Guru Ji Da Pehla Safar.mp3
43:02
ਕਿਸ਼ੋਰ ਕੌਤਕ
Kishor Kautak
audio/audioBooks/BhaiVirSinghJi/SriKalgidharChamatkar/05 Kishor Kautak.mp3
2:01:29
ਰਾਜਾ ਰਤਨ ਰਾਇ
Raja Ratan Rai
audio/audioBooks/BhaiVirSinghJi/SriKalgidharChamatkar/06 Raja Ratan Rai.mp3
2:04:54
ਮੇਰਾ ਦੁੱਧ (ਬੁੱਢਣ ਸ਼ਾਹ)
Mera Dudh (Buddan Shah)
audio/audioBooks/BhaiVirSinghJi/SriKalgidharChamatkar/07 Mera Dudh.mp3
31:26
ਕਾਲਸੀ ਦਾ ਰਿਖੀ
Kalsi da Rikhi
audio/audioBooks/BhaiVirSinghJi/SriKalgidharChamatkar/08 Kalsi da Rikhi.mp3
1:46:02
ਜੁੱਧ ਭੰਗਾਣੀ
Judh Bhangani
audio/audioBooks/BhaiVirSinghJi/SriKalgidharChamatkar/09 Bhangani da Yudh.mp3
1:14:32
ਰਾਇ ਪੁਰ ਦੀ ਰਾਣੀ
Raipur di Rani
audio/audioBooks/BhaiVirSinghJi/SriKalgidharChamatkar/10 Raipur di Rani.mp3
1:36:50
ਨਾਦੌਣ ਯੁੱਧ
Nadaon Yudh
audio/audioBooks/BhaiVirSinghJi/SriKalgidharChamatkar/11 Nadaon da Yudh.mp3
1:36:56
ਮੋਹਿਨਾ-ਸੋਹਿਨਾ
Mohena - Sohena
audio/audioBooks/BhaiVirSinghJi/SriKalgidharChamatkar/12 Mohena te Sohena.mp3
1:20:18
ਪੀਰ ਬੁੱਧੂ ਸ਼ਾਹ
Peer Budhu Shah
audio/audioBooks/BhaiVirSinghJi/SriKalgidharChamatkar/13 Peer Budhu Shah.mp3
58:52
ਹਾਇ ! ਨਾ ਤੋੜ
Haye ! Na Todh
audio/audioBooks/BhaiVirSinghJi/SriKalgidharChamatkar/14 Haye Na Todh.mp3
1:15:31
ਭਾਈ ਹਰਵੰਤ ਸਿੰਘ
Bhai Harwant Singh
audio/audioBooks/BhaiVirSinghJi/SriKalgidharChamatkar/15 Bhai Harwant Singh.mp3
45:24
ਬਨ ਯੁੱਧ
Ban Yudh 
audio/audioBooks/BhaiVirSinghJi/SriKalgidharChamatkar/16 Ban Yudh.mp3
52:38`

async function processLines() {
    const uuid = await import("https://unpkg.com/uuid");

    const toParseLines = toParse.split(/\r?\n/);

    const result = [];
    let j = 1;
    for (let i = 0; i < toParseLines.length; i = i + 4) {
        const duration = toParseLines[i + 3];
        const durationParts = duration.split(":");
        result.push({
            id: uuid.v4(),
            audioBookId: "75f9b6cc-d424-4749-bca4-c1500192dc47",
            audioBookOrder: j,
            name: {
                pa: toParseLines[i],
                en: toParseLines[i + 1],
            },
            audioPath: toParseLines[i + 2],
            duration: {
                ...(durationParts.length === 3 && { hours: Number.parseInt(durationParts[0]) }),
                minutes: Number.parseInt(durationParts[durationParts.length - 2]),
                seconds: Number.parseInt(durationParts[durationParts.length - 1]),
            },
        });
        j = j + 1;
    }

    console.log(JSON.stringify(result));

}

processLines();

