
export const DegreeSection = () => {
  return (
    <>
    <section className="text-5xl font-bold text-white">
        <span className="text-yellow-500" id="temperature">
            13
        </span>
            °C
    </section>   
    <section>
        <img id="iconImg" src="https://openweathermap.org/img/wn/04d.png" />
    </section>
    <section className="font-bold uppercase text-xl text-white mb-6" id="description">
        descripción
    </section>
    </>
  )
}
