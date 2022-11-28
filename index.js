// function Monday()
// {
//     console.log("go for a five miles run");
//     console.log("pump iron");
// }
// function Tuesday()
// {
//     console.log("go for a five miles run");
//     console.log("swim 50 laps");
// }
// function Wednesday()
// {
//     console.log("go for a five miles run");
//     console.log("go for a five miles run");
// }
// function thursday()
// {
//     console.log("go for a five miles run");
//     console.log("pump iron")

// }
// function friday()
// {
//     console.log("go for a five miles run");
//     console.log("swim 40 laps")
// }
 function runFiveMiles()
{
     console.log("go for a five miles run");
}
function Liftingweight()
 {
    console.log("pump iron");
 }
  function Swimming()
 {
     console.log("swim 40 laps");
 }

// function Monday()
// {runFiveMiles();
//     Liftingweight();
//     }

// function Tuesday()
// {runFiveMiles();
// Swimming();
// }
// function Wednesday()
// {
//     runFiveMiles();
// }

function ExcerciseRoutine(postRunActivity)
{
    runFiveMiles();
    postRunActivity();

}
// function Monday()
// {
//     ExcerciseRoutine(Liftingweight);
// }
// function Tuesday()
// {
//     ExcerciseRoutine(Swimming);
// }
// function Wednesday()
// {
//     ExcerciseRoutine(() => console.log("Streching"));
// }
function MorningRoutine(Excercise)
{
    let breakfast;
    if(Excercise===Liftingweight)
    {
        breakfast = "Protein bar"
    }
    else if(Excercise===Swimming)
    {
        breakfast="smoothie"
    }
    else {breakfast="granola"}


ExcerciseRoutine(Excercise);
return function()
{
    console.log(`yumm yumm, this ${breakfast} is delicious!`) 
}
}
const Afterexcercise=MorningRoutine()

Afterexcercise();