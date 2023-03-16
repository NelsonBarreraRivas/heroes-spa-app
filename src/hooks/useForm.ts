import { ChangeEvent, useState } from "react"

export const useForm = <T extends object>(initialForm: T) => {

    const [formState, setFormState] = useState(initialForm)

    const onChangue = ({ target }: ChangeEvent<HTMLInputElement>): void => {

        const { value, name } = target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const isEmpty: boolean = Object.values(formState).includes("")

    const onResetForm = (): void => {
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onChangue,
        onResetForm,
        isEmpty
    }
}