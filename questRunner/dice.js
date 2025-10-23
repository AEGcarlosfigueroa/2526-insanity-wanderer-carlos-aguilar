function rollDice(number, faces)
{
    let result = 0;

    for(let i=0; i<number; i++)
    {
        result += (Math.floor(Math.random*faces) + 1);
    }

    return result;
}