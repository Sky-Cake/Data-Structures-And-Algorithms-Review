// array of numbers
const items_List = [60, 40, 30, 5, 90, 10, 20];

linear_Search(60, items_List);


// implementation of linear search algorithm
function linear_Search(target_Value, list)
{
    // store the total number of checks including both matches and mismatches
    let total_Checks = 0;

    let item_Found = false;

    for(let i = 0; i < list.length; i++)
    {
        if(target_Value == list[i])
        {
            item_Found = true;
            console.log("SUCCESS -> Target Value Found in List\n");

            total_Checks++;
            break;
        }
        else
        {
            total_Checks++;
        }
    }

    if(item_Found == false)
    {
        console.log("FAILURE -> Target Value Not Found in List\n");
    }

    console.log(`Total number of checks performed: ${total_Checks}`)
    console.log(`Total number of items in list: ${list.length}`)
}
