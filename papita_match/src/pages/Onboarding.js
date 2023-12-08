import Nav from "../components/Nav"
import { useState } from "react"

const Onboarding = () => {
    const[formData, setFormData]=useState({
        user_id:'',
        first_name:'',
        dob_day:'',
        dob_year:'',
        show_gender: false,
        gender_identity: 'man',
        gender_interest: 'woman',
        email: '',
        url: '',
        about: '',
        matches: []
    })

    const handleSubmit = () => {
        console.log('submitted')
    }
    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const name= e.target.name
    
        setFormData((prevState)=>({
            ...prevState,
            [name] : value,
        }))
    }
    console.log(formData)
    return (
        <>
            <Nav
                minimal={true}
                authToken={()=>{}}
                setShowModal={false}
                showModal={false}
            />
            <div className="onboarding">
                <h2>CREAR CUENTA</h2>
                <form>
                    <section>
                        <label htmlFor="first_name">Nombres</label>
                        <input 
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="Nombres"
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                        <label>Fecha Nacimiento</label>
                        <div className="multiple-input-container"> 
                        <input 
                            id="dob_day"
                            type="number"
                            name="dob_day"
                            placeholder="DD"
                            required={true}
                            value={formData.dob_day}
                            onChange={handleChange}
                        />
                        <input 
                            id="dob_month"
                            type="number"
                            name="dob_month"
                            placeholder="MM"
                            required={true}
                            value={formData.dob_month}
                            onChange={handleChange}
                        />
                        <input 
                            id="dob_year"
                            type="number"
                            name="dob_year"
                            placeholder="AAAA"
                            required={true}
                            value={formData.dob_year}
                            onChange={handleChange}
                        />

                        <label>Género</label>
                        <div className="multiple-input-container">
                        <input 
                            id="man-gender-identity"
                            type="radio"
                            name="gender_identity"
                            value="man"
                            onChange={handleChange}
                            checked={formData.gender_identity === 'man'}
                        />
                        <label htmlFor="man-gender-identity">Hombre</label>
                        <input 
                            id="woman-gender-indentity"
                            type="radio"
                            name="gender_identity"
                            value="woman"
                            onChange={handleChange}
                            checked={formData.gender_identity === 'woman'}
                        />
                        <label htmlFor="man-gender-identity">Mujer</label>
                        <input 
                            id="more-gender-indentity"
                            type="radio"
                            name="gender_identity"
                            value="more"
                            onChange={handleChange}
                            checked={formData.gender_identity === 'more'}

                        />
                        <label htmlFor="man-gender-identity">Otros</label>
                        </div>
                        <label htmlFor="show-gender">Mostrar el genero en mi Perfil</label>
                        <input 
                            id="show-gender"
                            type="checkbox"
                            name="show_gender"
                            onChange={handleChange}
                            checked={formData.show_gender}
                        />
                        <label>Muestrame</label>
                        <div className="multiple-input-container"></div>
                        <input 
                            id="man-gender-interest"
                            type="radio"
                            name="gender_interest"
                            value="man"
                            onChange={handleChange}
                            checked={formData.gender_interest === 'man'}
                        />
                        <label htmlFor="man-gender-interest">Hombre</label>
                        <input 
                            id="woman-gender-interest"
                            type="radio"
                            name="gender_interest"
                            value="woman"
                            onChange={handleChange}
                            checked={formData.gender_interest === 'woman'}
                        />
                        <label htmlFor="woman-gender-interest">Mujeres</label>
                        <input 
                            id="everyone-gender-indentity"
                            type="radio"
                            name="gender_interest"
                            value="everyone"
                            onChange={handleChange}
                            checked={formData.gender_interest === 'everyone'}

                        />
                        <label htmlFor="everyone-gender-interest">Ambos</label>   
                        </div>

                        <label htmlFor="about">Acerca de mi</label>
                        <input 
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder = "Me gusta caminar y usar papita match"
                            value={formData.about}
                            onChange={handleChange}
                        />
                        <input type="submit"/>

                    </section>
                    <section>
                    <label htmlFor="url">Perfil</label>
                        <input 
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="photo-container">
                            <img src={formData.url} alt="inserte foto"/>
                        </div>


                    </section>
                </form>
            </div>
        </>
    )

}
export default Onboarding