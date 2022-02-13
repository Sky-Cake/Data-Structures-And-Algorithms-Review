// unsorted array of numbers
let items_List = [60, 40, 30, 5, 90, 10, 20];

insertion_Sort(items_List);
show_Result(items_List);


// implementation of insertion sort algorithm
function insertion_Sort(items_List)
{
    // the index of an element from the sorted part of the array
    let sorted_Index = 0;

    for(let i = 1; i < items_List.length; i++)
    {
        sorted_Index = i - 1;
        current_Index = i;

        // sort the elements of the sorted part of the array
        while(sorted_Index >= 0)
        {
            if(items_List[sorted_Index] > items_List[current_Index])
            {
                swap(sorted_Index, current_Index, items_List);
            }

            sorted_Index = sorted_Index - 1;
            current_Index = current_Index - 1;
        }
    }
}


// this function will swap two elements in an array
function swap(sorted_Index, current_Index, items_List)
{
    // store the element with a higher value
    let temp_element = items_List[sorted_Index];

    // swap elements
    items_List[sorted_Index] = items_List[current_Index];
    items_List[current_Index] = temp_element;
}


// this function will print the sorted array
function show_Result(items_List)
{
    console.log("The following is the sorted array,");

    for(let i = 0; i < items_List.length; i++)
    {
        console.log(`items_List[${i}] = ${items_List[i]}`);
    } 
}

