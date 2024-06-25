


export namespace fnc {

    /**
     * generate a UUID
     * @returns A string containing a randomly generated, 36 character long  UUID.
     */
    export const ID = (): string => {
        return self.crypto.randomUUID()
    }

    /**
     * part of string
     */
    export enum toTrimPos {
        start,
        mid,
        end
    }

    /**
     * trimming a string to a specific length
     * @param str string to trm
     * @param targetLen resulted lenght
     * @param trpos part of string to trim
     * @param char wildcard
     * @returns string of specified size
      //! @abstract not good at edge values
     */
    export const trstr = (
        str: string = ID(), targetLen: number = 16,
        trpos: toTrimPos = toTrimPos.end, char: string = '...') => {

        // how long should be left from the str
        const trLen = targetLen - char.length

        if (trLen > targetLen ||
            trLen + 1 < char.length ||
            targetLen >= str.length) return str

        switch (trpos) {
            case 0: // start
                return char + str.slice(-trLen)
            case 1: // mid
                return str.slice(0, trLen / 2) + char + str.slice(-trLen / 2)
            case 2: // end 
                return str.slice(0, trLen) + char
            default:
                return ''
        }

    }
}
