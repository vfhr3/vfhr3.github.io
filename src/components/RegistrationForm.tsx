import {useState} from 'react';

export function RegistrationForm() {

    const [genderValue, setGenderValue] = useState("none")

    function handleChange(e : any) {
        setGenderValue(e.target.value)
        console.log(genderValue)
    }

    return (
        <form className={'flex flex-col'}>

                <div className='w-full'>
                  <input placeholder='Enter Username' type={'text'} className='h-[40px] w-full rounded-[20px] p-3 m-1'></input>
                </div>

                <div className='w-full'>
                  <input placeholder='Enter Email' type={'text'} className='h-[40px] w-full rounded-[20px] p-3 m-1'></input>
                </div>

                <div className='w-full'>
                    <input placeholder='Enter Password' type={'password'} className='h-[40px] w-full rounded-[20px] p-3 m-1'></input>
                </div>

                <div className="w-full mb-2">
                    <input placeholder='Confirm Password' type={'password'} className='h-[40px] w-full rounded-[20px] p-3 m-1'></input>
                </div>

                <div className='flex w-full mb-4 justify-between p-1'>
                    <select defaultValue={'None'} onChange={(e) => handleChange(e)} className='transition-all mr-1 rounded-full p-2'>
                        <option value={'None'}>Select gender</option>
                        <option value={'male'}>Male</option>
                        <option value={'female'}>Female</option>
                        <option value={'other'}>Other</option>
                    </select>
                    {genderValue == 'other' && <input className='rounded-full p-3 self-end' placeholder='Enter Gender'></input>}
                </div>

                <button className = {'h-[40px] w-full rounded-[20px] bg-[#2b2b2b] self-end hover:bg-black transition-all ease-in mt-3'}type='submit'>
                  <p className='w-full py-2 text-white font-normal'>SIGN UP</p>
                </button>

        </form>
    )
}