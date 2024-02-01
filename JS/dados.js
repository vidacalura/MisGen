class Musica {
    constructor(embedLink, nome, compositor, cNome, cGen){
        this.embedLink = embedLink;
        this.nomeMusica = nome;
        this.compositor = compositor;
        this.cantor = new Cantor(cNome, cGen);
    }
}

class Cantor {
    constructor(nome, genero){
        this.nome = nome;
        this.genero = genero; // F -> Female / M -> Male / V -> Vocaloid
    }
}


export let dados = [];

dados.push(new Musica(
    "https://www.youtube.com/embed/EkhCC0csnxU",
    "睡魔 / 缶缶",
    "Ayase",
    "缶缶 (KANKAN)",
    "M"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/ZOaerF49taY",
    "ロストワンの号哭 / Reol(れをる) Cover",
    "Neru",
    "れをる (Reol)",
    "F"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/-eRrtWqu36E",
    "【METAL COVER】 KING 【Futakuchi Mana 二口魔菜】",
    "Kanaria",
    "Futakuchi Mana",
    "M"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/Cudfi9AHkeU",
    "【MV】ルマ 莉犬【オリジナル曲】",
    "かいりきベア (Kairiki Bear)",
    "莉犬くん (Riinu-kun)",
    "M"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/nNNBgTK6q1w",
    "ヨセアツメ 和ぬか【Music Video】",
    "和ぬか (wanuka)",
    "和ぬか (wanuka)",
    "M"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/-6kyfC_EjU0",
    "マリオネットアリア / SILVANA -Self Cover-",
    "SILVANA",
    "SILVANA",
    "M"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/rBnJ7KB9rPc",
    "Kanashimi wo Yasashisani ni",
    "Tomoji Sogawa",
    "Eiko Satō (佐藤 英子)",
    "F"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/-KPrQyIuqwI",
    "Mekakucity M's - Shounen Brave 「少年ブレイヴ」",
    "じん (Jin)",
    "nano.RIPE",
    "F"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/1cqqGOvOGfI",
    "愛して愛して愛して　歌ってみた 宮下遊",
    "きくお (Kikuo)",
    "宮下遊 (Miy Yuu)",
    "M"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/oKwF4vPf3jA",
    "アニマル まふまふ【歌ってみた】",
    "DECO*27",
    "まふまふ (mafumafu)",
    "M"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/mFih47l1pVI",
    "稲葉曇『ハルの寂寞』Vo. 弦巻マキ",
    "稲葉曇 (inabakumori)",
    "弦巻マキ (Tsurumaki Maki)",
    "V"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/xvctf2RK23M",
    "【Saki AI】Naraku no Hana【SynthV Cover】",
    "?",
    "Saki AI",
    "V"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/fM5EsLHssns",
    "少女Aを歌いました / rei sirose",
    "椎名もた / ぽわぽわP (siinamota / PowapowaP)",
    "rei sirose",
    "F"
));

dados.push(new Musica(
    "https://www.youtube-nocookie.com/embed/ucbx9we6EHk",
    "【MV】女の子になりたい まふまふ",
    "まふまふ (mafumafu)",
    "まふまふ (mafumafu)",
    "M"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/2EmstVQeEiA",
    "【Ado】ダーリンダンス 歌いました",
    "かいりきベア (Kairiki Bear)",
    "Ado",
    "F"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/zh-4M5blbiI",
    "和田アキ子 ｰ YONA YONA DANCE",
    "フレデリック (FREDERIC)",
    "和田アキ子 (Wada Akiko)",
    "F"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/mPhNTys79xE",
    "【Cover】レミングミング(Lemming Ming) - いかさん/IKASAN",
    "かいりきベア (Kairiki Bear)",
    "いかさん (IKASAN)",
    "F"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/FNflOu2sl60",
    "ステラの座 / 雄之助 feat. 星界",
    "雄之助 (Yunosuke)",
    "星界 (SEKAI)",
    "V"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/G9LXGvr7Nyc",
    "【公式】 ネロイズム かいりきベア feat.鳴花ミコト",
    "かいりきベア (Kairiki Bear)",
    "鳴花ミコト (Meikahime Mikoto)",
    "V"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/ZhuJX-Br3Ak",
    "シュガリィ・エピローグ／西憂花 feat.可不(KAFU)",
    "西憂花 (NishiYuuka)",
    "可不 (KAFU)",
    "V"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/oLfxVwlXluU",
    "Habit / SEKAI NO OWARI 全部僕の声",
    "SEKAI NO OWARI",
    "緑仙 (Ryushen)",
    "F"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/k1d3E1zeVzI",
    "抜錨 / ナナホシ管弦楽団 -Cover- ウォルピスカーター",
    "ナナホシ管弦楽団 (nanahoshi orchestra)",
    "ウォルピス社 (Wolpiscarter)",
    "M"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/mhIz_V8r01Y",
    "【音楽的同位体】霞がついてくる covered by 星界",
    "はるまきごはん (Harumaki Gohan)",
    "星界 (SEKAI)",
    "V"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/2DqWNaAztvs",
    "降伏論 / 宮下遊(Official Video)",
    "MYTH&ROID",
    "宮下遊 (Miy Yuu)",
    "M"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/vhYsFIDAt2I",
    "有機酸/ewe「カトラリー」(self cover) MV",
    "有機酸 (Yoh Kamiyama)",
    "有機酸 (Yoh Kamiyama)",
    "M"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/pGcORVUfJFg",
    "有夜無夜 / 獅子志司 MV",
    "獅子志司 (shishi shishi)",
    "獅子志司 (shishi shishi)",
    "M"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/Ld3_rB1GwsU",
    "【Shiki Miyoshino】Lucifer - ¿? 【Cover】",
    "¿?shimon",
    "Shiki Miyoshino (美吉野しき)",
    "F"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/w05NM9YFhmk",
    "【波音リツ】Abstract Nonsense アブストラクト・ナンセンス【UTAUカバー】",
    "Neru",
    "波音リツ (Namine Ritsu)",
    "V"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/UMtHhEyfLp8",
    "劇団Cちゃん  YASUHIRO(康寛) feat.狐子",
    "康寛 (Yasuhiro)",
    "狐子 (Coko)",
    "V"
));

dados.push(new Musica(
    "https://www.youtube.com/embed/LLjfal8jCYI",
    "オーバーライド - 重音テトSV[吉田夜世]",
    "吉田夜世 (Yasei Music)",
    "重音テトSV (Synthesizer V Kasane Teto)",
    "V"
));
