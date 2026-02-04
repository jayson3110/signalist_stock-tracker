import { Label } from "@radix-ui/react-dropdown-menu"
import { Input } from "../ui/input"
import { cn } from "@/lib/utils"

function InputField({name, label, placeholder, register, validation, error, type ="text", disabled, value} : FormInputProps) {
  return (
    <div className='space-y-2'>
        <Label htmlFor={name} className='form-label'>   
           {label}
        </Label>

        <Input 
            id={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            defaultValue={value}
            className={cn('form-input', {'opacity-50 cursor-not-allowed': disabled})}
            {...register(name, validation)}
        />

        {error && (
            <p className='text-sm text-red-500'>
                {error.message?.toString()}
            </p>
        )}
    </div>
  )
}

export default InputField