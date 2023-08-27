export default function paginate(arr, currentPage, itemsPerPage){
    let arr_length_split = arr?.length/2
    let start = (currentPage - 1) * itemsPerPage
    let end = start + itemsPerPage
    return arr?.slice(start ? start : 0, end ? end : arr_length_split)
}