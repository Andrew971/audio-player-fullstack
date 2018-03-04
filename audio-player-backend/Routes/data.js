const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')


app.use(bodyParser.json())


const Data = [
  {
    id: 1,
    name: 'Tashikana Koto',
    src: 'http://localhost:8080/Assets/audio.mp3',
    overview: 'some text'
  },
  {
    id: 2,
    name: 'In between dream',
    src: 'http://localhost:8080/Assets/In-Between-Dreams.mp3',
    overview: 'some text'
  },
  {
    id: 3,
    name: 'Olympian',
    src: 'http://localhost:8080/Assets/olympian.mp3',
    overview: 'some text'
  },
  {
    id: 4,
    name: 'Transmission',
    src: 'http://localhost:8080/Assets/transmission.mp3',
    overview: 'some text'
  },
  {
    id: 5,
    name: "Drake : God's plan",
    src: 'http://localhost:8080/Assets/Drake-Gods-Plan.mp3',
    overview: 'some text'
  },
  {
    id: 6,
    name: 'Ed sheran - Perfect',
    src:'http://localhost:8080/Assets/Ed_Sheeran_Perfect_Official_Music_Video_.mp3',
    overview: 'some text'
  },
  {
    id: 7,
    name: 'Bella - Wolfine',
    src: 'http://localhost:8080/Assets/Bella,Wolfine-Vídeo-Oficial.mp3',
    overview: 'some text'
  },
  {
    id: 8,
    name: 'Ed Sheeran - Thinking Out Loud',
    src: 'http://localhost:8080/Assets/Ed Sheeran-Thinking-Out-Loud-Official.mp3',
    overview: 'some text'
  },
  {
    id: 9,
    name: 'Chris Brown - Tempo',
    src: 'http://c151.clink.to/yt/3/36/chris_brown_tempo_audio_mp3_39525.mp3',
    overview: 'some text'
  },
  {
    id: 10,
    name: 'Chris Brown - Privacy',
    src:'http://c72.clink.to/yt/6/88/chris_brown_privacy_explicit_version_mp3_39563.mp3',
    overview: 'some text'
  },
  {
    id: 11,
    name: 'Chris Brown - Questions',
    src:'http://c121.clink.to/yt/4/e0/chris_brown_questions_official_video_mp3_39605.mp3',
    overview: 'some text'
  },
  {
    id: 12,
    name: 'Chris Brown - High Endft. Future, Young Thug',
    src:'http://c108.clink.to/yt/4/de/chris_brown_high_end_official_video_ft._future_young_thug_mp3_39655.mp3',
    overview: 'some text'
  },
  {
    id: 13,
    name: 'Bruno Mars - That’s What I Like',
    src:'http://c109.clink.to/yt/3/5c/bruno_mars_that_s_what_i_like_official_video_mp3_39722.mp3',
    overview: 'some text'
  },
  {
    id: 14,
    name: 'Bruno Mars - Finesse (Remix) ',
    src:'http://c107.clink.to/yt/9/51/bruno_mars_finesse_remix_feat._cardi_b_official_video_mp3_39740.mp3',
    overview: 'some text'
  },
  {
    id: 15,
    name: 'Bruno Mars - 24K Magic',
    src:'http://c41.clink.to/yt/5/a5/bruno_mars_24k_magic_official_video_mp3_39779.mp3',
    overview: 'some text'
  },
  {
    id: 16,
    name: 'Mark Ronson - Uptown Funk ft. Bruno Mars',
    src:'http://c164.clink.to/yt/9/41/mark_ronson_uptown_funk_ft._bruno_mars_mp3_39825.mp3',
    overview: 'some text'
  },
  {
    id: 17,
    name: 'Bruno Mars - Grenade',
    src:'http://c69.clink.to/yt/a/85/bruno_mars_grenade_official_music_video_mp3_39872.mp3',
    overview: 'some text'
  },
  {
    id: 18,
    name: 'Luis Fonsi - Despacito ft. Daddy Yankee',
    src:'http://c63.clink.to/yt/f/3b/luis_fonsi_despacito_ft._daddy_yankee_mp3_39921.mp3',
    overview: 'some text'
  },
  {
    id: 19,
    name: 'Maître Gims - Caméléon',
    src:'http://c56.clink.to/yt/a/e0/maitre_gims_cameleon_clip_officiel_mp3_39978.mp3',
    overview: 'some text'
  },
  {
    id: 20,
    name: 'Maître Gims - Bella',
    src: 'http://c123.clink.to/yt/0/f8/maitre_gims_bella_mp3_40027.mp3',
    overview: 'some text'
  },
  {
    id: 21,
    name: 'Maître Gims - Sapés comme jamais ',
    src:'http://c172.clink.to/yt/d/4e/maitre_gims_sapes_comme_jamais_clip_officiel_ft._niska_mp3_40072.mp3',
    overview: 'some text'
  },
  {
    id: 22,
    name: "Maître Gims - J'me tire",
    src:'http://c104.clink.to/yt/9/49/maitre_gims_j_me_tire_official_video_mp3_40109.mp3',
    overview: 'some text'
  },
  {
    id: 23,
    name: 'Céline Dion - My Heart Will Go On',
    src:'http://c110.clink.to/yt/e/89/celine_dion_my_heart_will_go_on_mp3_40261.mp3',
    overview: 'some text'
  },
  {
    id: 24,
    name: 'Justin Bieber - What Do You Mean?',
    src:'http://c37.clink.to/yt/5/4b/justin_bieber_what_do_you_mean%3F_mp3_40280.mp3',
    overview: 'some text'
  },
  {
    id: 25,
    name: 'Tashikana Koto',
    src: 'http://localhost:8080/Assets/audio.mp3',
    overview: 'some text'
  },
  {
    id: 26,
    name: 'In between dream',
    src: 'http://localhost:8080/Assets/In-Between-Dreams.mp3',
    overview: 'some text'
  },
  {
    id: 27,
    name: 'Olympian',
    src: 'http://localhost:8080/Assets/olympian.mp3',
    overview: 'some text'
  },
  {
    id: 28,
    name: 'Transmission',
    src: 'http://localhost:8080/Assets/transmission.mp3',
    overview: 'some text'
  },
  {
    id: 29,
    name: 'Tashikana Koto',
    src: 'http://localhost:8080/Assets/audio.mp3',
    overview: 'some text'
  },
  {
    id: 30,
    name: 'In between dream',
    src: 'http://localhost:8080/Assets/In-Between-Dreams.mp3',
    overview: 'some text'
  },
  {
    id: 31,
    name: 'Olympian',
    src: 'http://localhost:8080/Assets/olympian.mp3',
    overview: 'some text'
  },
  {
    id: 32,
    name: 'Transmission',
    src: 'http://localhost:8080/Assets/transmission.mp3',
    overview: 'some text'
  }
]

router.get('/', (req, res) => {
    res.send(Data)
})



module.exports = router

