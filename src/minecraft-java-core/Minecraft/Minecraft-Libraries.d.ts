/**
 * @author Luuxis
 * @license CC-BY-NC 4.0 - https://creativecommons.org/licenses/by-nc/4.0/
 */
export default class Libraries {
    json: any;
    options: any;
    constructor(options: any);
    Getlibraries(json: any): Promise<any[]>;
    GetAssetsOthers(url: any): Promise<any[]>;
    natives(bundle: any): Promise<any>;
    checkFiles(bundle: any): Promise<void>;
    getFiles(path: any, file?: any[]): any[];
}
