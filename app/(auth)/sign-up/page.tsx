'use client'
import {CountrySelectField} from '@/components/forms/CountrySelectFiled'
import FooterLink from '@/components/forms/FooterLink'
import InputField from '@/components/forms/inputField'
import SelectField from '@/components/forms/SelectField'
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/constants'
import { useForm, SubmitHandler  } from 'react-hook-form'

function SignUp() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      country: 'Viet Nam',
      investmentGoals: 'Growth',
      riskTolerance: 'Medium',
      preferredIndustry: 'Technology',
    },mode: 'onBlur',
  })
  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    try{
      console.log(data, 'submitted')
    }catch(errors){
      console.log(errors)
    }
  }

  return (
    <>
      <h1 className='form-title'>
        Sign Up & Personalize
      </h1>
    {/* Form fields go here */}
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

       <InputField name= "fullName" label="Full Name"
        placeholder='Jayson Vo'
        register={register}
        error={errors.fullName}
        validation={{ required: 'Full Name is required', minLength: 2 }}
       />

<InputField name= "email" label="Email"
        placeholder='contact@gmail.com'
        register={register}
        error={errors.email}
        validation={{ required: 'Email name is require', pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' }}
       />


<InputField name= "password" label="Password"
        placeholder='Enter a strong password'
        type='password'
        register={register}
        error={errors.password}
        validation={{ required: 'Password is required', minLength: 2 }}
       />

       <CountrySelectField 
        name="country"
        label="Country"
        control={control}
        error={errors.country}
        required
       />

       <SelectField 
         name="investmentGoals"
         label="Investment Goals"
         placeholder="Select your investment goals"
         options={INVESTMENT_GOALS}
         control={control}
         error={errors.investmentGoals}
         required
       />

        <SelectField 
                name="riskTolerance"
                label="Risk Tolerance"
                placeholder="Select your risk tolerance"
                options={RISK_TOLERANCE_OPTIONS }
                control={control}
                error={errors.riskTolerance}
                required
              />


        <SelectField 
                name="preferredIndustry"
                label="Preferred Industry"
                placeholder="Select your preferred industry"
                options={PREFERRED_INDUSTRIES}
                control={control}
                error={errors.preferredIndustry}
                required
              />



        <button
          type='submit'
          className='yellow-btn w-full mt-4'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating Account' : 'Starting your Investing Journey'}
        </button>

        <FooterLink text="Already have an account" linkText="Sign in" href="/sign-in"/>
      </form>
    </>
  )
}

export default SignUp