import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheck from "./GreenCheck";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";
import { useDispatch } from "react-redux";

export default function GreenCheckPlus({
  assignmentId,
}: {
  assignmentId: string;
}) {
  const dispatch = useDispatch();

  return (
    <div className="float-end">
      <GreenCheck />

      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => {
          dispatch(deleteAssignment(assignmentId));
        }}
      />

      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
