export default function swap(i, j, arr) {
    console.log(typeof i)
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}