// array of sorted numbers
const items_List = [5, 10, 20, 30, 40, 60, 90, 150];


binary_Search(10, items_List);


// implementation of binary search algorithm
function binary_Search(num, items_List)
{
    upper_Bound = items_List.length - 1;
    lower_Bound = 0;

    while(true)
    {
        // final check to see whether the searched item is in the sorted list
        if(upper_Bound < lower_Bound)
        {
            console.log(`Num(${num}) Not Found!`);
            break;
        }

        mid = Math.floor(lower_Bound + (upper_Bound - lower_Bound)/2);

        if(items_List[mid] == num)
        {
            // console.log(`Same as num(${num}) : Mid = ${mid} : Mid Item Value = ${items_List[mid]} : Upper Bound = ${upper_Bound} : Lower Bound = ${lower_Bound}`);
            console.log(`Num(${num}) Found, the index value is ${mid}`);
            break;
        }
        else if(items_List[mid] > num)
        {
            // console.log(`Higher than num(${num}) : Mid = ${mid} : Mid Item Value = ${items_List[mid]} : Upper Bound = ${upper_Bound} : Lower Bound = ${lower_Bound}`);
            upper_Bound = mid - 1;
        }
        else if(items_List[mid] < num)
        {
            // console.log(`Lower than num(${num}) : Mid = ${mid} : Mid Item Value = ${items_List[mid]} : Upper Bound = ${upper_Bound} : Lower Bound = ${lower_Bound}`);
            lower_Bound = mid + 1;
        }
    }
}