import swap from './swap'

export default function sortFiles(files) {
    let targetCount = files.length;
    let count = 0;
    while (count < targetCount) {
        for (let i = 1; i < files.length; i++) {
            if (files[i-1].node.base[0] > files[i].node.base[0]) {
                files = swap(i-1, i, files);
            }
        }
        count += 1;
    }
    return files;
}