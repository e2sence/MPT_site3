import { fnc } from './fnc'

let appId = ''

window.onload = () => {
    appId = fnc.ID();
    let signFooter = (document
        .getElementsByClassName('mpt_signin_plate_footer')[0] as HTMLDivElement)
    signFooter.innerText = fnc.trstr(appId, 20, fnc.toTrimPos.mid, '...')

    signFooter.addEventListener('pointerdown', () => {
        navigator.clipboard.writeText(appId)
    })
}

export const hello = () => {
    console.log(fnc.ID())
}

hello()