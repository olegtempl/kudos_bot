const Scene = require('telegraf/scenes/base'),
    fs = require('fs')
import cl from 'node-cl-log'

const {
    enter,
    leave
} = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../../../utils/exportTextData'
import kudoCardGen from '../../../utils/cardGen'

const catalogCardWellDoneBeScene = new Scene('catalogCardWellDoneBe');



catalogCardWellDoneBeScene.enter(
    (ctx) => {
        ctx.reply(`${textData.cmdText.catalog.enterTextForKudoCard}`, Markup.keyboard([
                [`${textData.eB.backBtn} ${textData.menuText.backBtn}`,
                    `${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`
                ]
            ])
            .oneTime()
            .resize()
            .extra()
        )
    }
)

catalogCardWellDoneBeScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('catalogCardWellDone'))
catalogCardWellDoneBeScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
catalogCardWellDoneBeScene.on('message', (ctx) => {
    let msgLength = (ctx.message.text.length < 140) ? kudoCardGen.beKudoCardsGen.wellDoneKudoCardGen(ctx.message.text) : ctx.reply(`${textData.msgText.pleaseEnterShortMsg.start} ${ctx.message.text.length}. ${textData.msgText.pleaseEnterShortMsg.end}`)
})

export default catalogCardWellDoneBeScene