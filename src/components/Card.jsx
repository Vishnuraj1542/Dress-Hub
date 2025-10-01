export default function Card(){
    return(
        <div className="bg-blue-500 flex flex-row ">
            <div class="flex w-full">
  <div class="w-32 flex-none bg-red-300">Fixed</div>
  <div class="flex-grow bg-blue-300">Flexible</div>
  <div class="basis-[200px] flex-shrink bg-green-300">Shrinkable</div>
</div>
        </div>
    )
}
