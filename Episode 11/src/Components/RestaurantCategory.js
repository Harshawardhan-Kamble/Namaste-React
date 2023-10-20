const RestaurantCategory=({data})=>{
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 text-lightBlack shadow-lg p-4 flex justify-between">
            <span className="font-bold text-lg text-lightBlack">{data.title} ({data.itemCards.length})</span>
            <span>&darr;</span>
        </div>
    )
}
export default RestaurantCategory