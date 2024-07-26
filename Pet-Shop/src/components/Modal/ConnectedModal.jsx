import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalSlice";

import Modal from "./Modal";

function ConnectedModal() {
  const modal = useSelector((state) => {
    return state.modal;
  });
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(closeModal());
  }

  return (
    <Modal isOpen={modal.isOpen} onClose={handleClose}>
      <h2>{modal.title}</h2>
      <div>{modal.content}</div>
    </Modal>
  );
}

export default ConnectedModal