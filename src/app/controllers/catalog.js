const Scene = require('telegraf/scenes/base'),
    fs = require('fs');

const {
    enter,
    leave
} = Stage;
import Stage from 'telegraf/stage';
import Markup from 'telegraf/markup';
import textData from '../utils/exportTextData';

const catalogScene = new Scene('catalog');

let albumImagesCudoCards = (ctx, next) => {
    ctx
        .replyWithMediaGroup([{
                media: {
                    url: 'https://picsum.photos/200/300/?random'
                },
                caption: 'Piped from URL',
                type: 'photo'
            },
            {
                media: {
                    url: 'https://picsum.photos/200/300/?random'
                },
                caption: 'Piped from URL',
                type: 'photo'
            },
            {
                media: {
                    url: 'https://picsum.photos/200/300/?random'
                },
                caption: 'Piped from URL',
                type: 'photo'
            },
            {
                media: {
                    url: 'https://picsum.photos/200/300/?random'
                },
                caption: 'Piped from URL',
                type: 'photo'
            },
            {
                media: {
                    url: 'https://picsum.photos/200/300/?random'
                },
                caption: 'Piped from URL',
                type: 'photo'
            },
            {
                media: {
                    url: 'https://picsum.photos/200/300/?random'
                },
                caption: 'Piped from URL',
                type: 'photo'
            },
            {
                media: {
                    url: 'https://picsum.photos/200/300/?random'
                },
                caption: 'Piped from URL',
                type: 'photo'
            }
        ])
        .then(() => next());
};

// ,
//         {
//             media: {
//                 source: '/cats/cat1.jpeg'
//             },
//             caption: 'From file',
//             type: 'photo'
//         },
//         {
//             media: {
//                 source: fs.createReadStream('/cats/cat2.jpeg')
//             },
//             caption: 'From stream',
//             type: 'photo'
//         },
//         {
//             media: {
//                 source: fs.readFileSync('/cats/cat3.jpeg')
//             },
//             caption: 'From buffer',
//             type: 'photo'
//         }

catalogScene.enter((ctx) => {
    ctx.reply(
        textData.cmdText.catalog.header,
        Markup.keyboard([
            [`${textData.eB.cat.promo} ${textData.menuText.catalog.promo}`],
            [
                `${textData.eB.cat.totallyAwesome} ${textData.menuText.catalog.totallyAwesome}`,
                `${textData.eB.cat.proud} ${textData.menuText.catalog.proud}`
            ],
            [
                `${textData.eB.cat.congratulations} ${textData.menuText.catalog.congratulations}`,
                `${textData.eB.cat.wellDone} ${textData.menuText.catalog.wellDone}`
            ],
            [
                `${textData.eB.cat.creatJob} ${textData.menuText.catalog.creatJob}`,
                `${textData.eB.cat.thankYou} ${textData.menuText.catalog.thankYou}`
            ],
            [`${textData.eB.cat.verryHappy} ${textData.menuText.catalog.verryHappy}`],
            // [`${textData.eB.backBtn} ${textData.menuText.backBtn}`],
            [`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`]
        ])
        .oneTime()
        .resize()
        .extra()
    );
});

catalogScene.hears(`${textData.eB.cat.promo} ${textData.menuText.catalog.promo}`, albumImagesCudoCards, (ctx) => {
    ctx.reply(
        `${textData.eT.other.upPointer} ${textData.msgText.catalog.promoFotoCards} ${textData.eT.other.downPointer}`,
        Markup.keyboard([
            [
                `${textData.eB.cat.totallyAwesome} ${textData.menuText.catalog.totallyAwesome}`,
                `${textData.eB.cat.proud} ${textData.menuText.catalog.proud}`
            ],
            [
                `${textData.eB.cat.congratulations} ${textData.menuText.catalog.congratulations}`,
                `${textData.eB.cat.wellDone} ${textData.menuText.catalog.wellDone}`
            ],
            [
                `${textData.eB.cat.creatJob} ${textData.menuText.catalog.creatJob}`,
                `${textData.eB.cat.thankYou} ${textData.menuText.catalog.thankYou}`
            ],
            [
                `${textData.eB.cat.verryHappy} ${textData.menuText.catalog.verryHappy}`,
                `${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`
            ]
        ])
        .oneTime()
        .resize()
        .extra()
    );
});

const getDirName = require('path').dirname;


var path = require('path');



const imageCardTotallyAwesome = (ctx, next) => {
    ctx
        .replyWithPhoto({
            source: fs.createReadStream(__dirname + '/totallyAwesome.jpg')
        }).then(() => next());

};


catalogScene.hears(
    `${textData.eB.cat.totallyAwesome} ${textData.menuText.catalog.totallyAwesome}`,
    imageCardTotallyAwesome,
    enter('catalogCardTotallyAwesome')
);
// catalogScene.hears(`${textData.eB.cat.proud} ${textData.menuText.catalog.proud}`, enter('catalogCardProud'))
// catalogScene.hears(`${textData.eB.cat.congratulations} ${textData.menuText.catalog.congratulations}`, enter('catalogCardCongratulations'))
// catalogScene.hears(`${textData.eB.cat.wellDone} ${textData.menuText.catalog.wellDone}`, enter('catalogCardWellDone'))
// catalogScene.hears(`${textData.eB.cat.creatJob} ${textData.menuText.catalog.creatJob}`, enter('catalogCardCreatJob'))
// catalogScene.hears(`${textData.eB.cat.thankYou} ${textData.menuText.catalog.thankYou}`, enter('catalogCardThankYou'))
// catalogScene.hears(`${textData.eB.cat.verryHappy} ${textData.menuText.catalog.verryHappy}`, enter('catalogCardVerryHappy'))
catalogScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'));

catalogScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn));

export default catalogScene;