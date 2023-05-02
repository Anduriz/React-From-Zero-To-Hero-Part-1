import { useDispatch, useSelector } from "react-redux"
import { onOpenDateModal, onCloseDateModalL } from '../store'

export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        isDateModalOpen
    } = useSelector( state => state.ui );

    const openDateModal = () => {
        dispatch( onOpenDateModal() )
    }

    const closeDateModal = () => {
        dispatch( onCloseDateModalL( ))
    }

    const toggleDateModal = () => {
        (isDateModalOpen)
        ? openDateModal()
        : closeDateModal();
    }

    return {
        // Propiedades
        isDateModalOpen,

        // Metodos
        openDateModal,
        closeDateModal,
        toggleDateModal,
    }
}