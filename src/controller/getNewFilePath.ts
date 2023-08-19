/**
 * @file file that contains the function that returns the new file path.
 *
 * @since 1.9.1
 * @author Jose Gracia Berenguer
 * @link https://github.com/Josee9988/MinifyAll repository.
 * @link https://github.com/Josee9988/MinifyAll/issues issues and enhancements.
 */

/**
 * Summary sets the path to the new file with minified code.
 *
 * Description receives the object path, the absolute path
 * and the name of the extension without a dot, then it creates
 * the new path to the new file with the minified text.
 *
 * @param {String} fileName the Full path with the name and extension to the current
 * file (the non minified one).
 * @return {String} path2NewFile the path to the new file which will have
 * the minified code.
 */

import * as path from 'path';

// tslint:disable-next-line: max-line-length
export default function getNewFilePath(fileName: string, prefixUsed: string = '-min'): string {
    const ext: string = path.extname(fileName);
    const extLen: number = ext.length;
    return extLen == 0 ?
        fileName + prefixUsed :
        fileName.substring(0, fileName.length - extLen) + prefixUsed + ext;
}
