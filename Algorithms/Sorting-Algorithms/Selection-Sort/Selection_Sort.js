// unsorted array of numbers
let items_List = [60, 40, 30, 5, 90, 10, 20];

selection_Sort(items_List);
show_Result(items_List);


// implementation of selection sort algorithm
function selection_Sort(items_List)
{
    let temp_min_element = 0;

    for(let i = 0; i < items_List.length; i++)
    {
        min_Index = i;

        for(let j = min_Index + 1; j < items_List.length; j++)
        {
            // finds the smallest element present in the remaining unsorted array
            if(items_List[min_Index] > items_List[j])
            {
                min_Index = j;
            }
        }

        // store the minimum element in the variable
        temp_min_element = items_List[min_Index];

        swap(temp_min_element, min_Index, i, items_List)
    }
}


// this function will swap two elements in an array
function swap(temp_min_element, min_Index, loop_Index, items_List)
{
    // swap elements
    items_List[min_Index] = items_List[loop_Index];
    items_List[loop_Index] = temp_min_element;
}


// this function will print the sorted array
function show_Result()
{
    console.log("The following is the sorted array,");

    for(let i = 0; i < items_List.length; i++)
    {
        console.log(`items_List[${i}] = ${items_List[i]}`);
    } 
}
