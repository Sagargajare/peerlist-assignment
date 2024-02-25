import React from "react";
import { DndContext, rectIntersection } from "@dnd-kit/core";
import ApplicantCard, { ExternalApplication } from "./ApplicantCard";
import { IApplicant } from "@/data/job";
import { type } from "os";
import { useDroppable } from "@dnd-kit/core";
import { Icons } from "@/data/icons";
import classNames from "classnames";

type Props = {
  applicant: IApplicant[];
};

type KanbanLaneProps = {
  status: string;
  applicant: IApplicant[];
};

const KanbanLane = (props: KanbanLaneProps) => {
  const { setNodeRef } = useDroppable({
    id: props.status,
  });

  const laneClasses = classNames("border m-1 rounded-lg w-1/3 bg-[#FAFBFC]", {
    "border-gray-200": props.status === "Applied",
    "border-[#E2F5EA]": props.status === "Shortlisted",
    "border-[#FFEAEA]": props.status === "Rejected",
  });

  const topBarClasses = classNames(
    "flex flex-row items-center p-2 rounded-t-lg",
    {
      "bg-gray-200": props.status === "Applied",
      "bg-[#E2F5EA]": props.status === "Shortlisted",
      "bg-red-200": props.status === "Rejected",
    }
  );

  const statusClasses = classNames("text-xs font-semibold", {
    "text-[#219653]": props.status === "Shortlisted",
    "text-[#EB5757]": props.status === "Rejected",
    "text-[#0D0D0D]": props.status === "Applied",
  });

  const LaneIcon = () => {
    switch (props.status) {
      case "Rejected":
        return <img src={Icons.rejectedFilled} alt="reject" />;
      case "Shortlisted":
        return <img src={Icons.tickFilled} alt="shortlist" />;
      default:
        return <img src={Icons.applied} alt="applied" />;
    }
  };

  return (
    <div className={laneClasses} ref={setNodeRef}>
      <div className={topBarClasses}>
        <div className="mr-1">
          <LaneIcon />
        </div>
        <div className={statusClasses}>
          {props.status.toUpperCase()} • {props.applicant.length}
        </div>
      </div>
      <div className="">
        {props.applicant.map((applicant) => {
          if (applicant?.isExternal) {
            return (
              <ExternalApplication
                key={applicant.id}
                id={applicant.id}
                applicant={applicant}
              />
            );
          }
          return (
            <ApplicantCard
              key={applicant.id}
              id={applicant.id}
              applicant={applicant}
            />
          );
        })}
      </div>
    </div>
  );
};

const KanbanBoard = (props: Props) => {
  const [applicants, setApplicants] = React.useState<IApplicant[]>(
    props.applicant
  );

  const onDragEnd = (e: any) => {
    const container = e.over?.id;
    switch (container) {
      case "Rejected":
        setApplicants(
          applicants.map((applicant) => {
            if (applicant.id === e.active.id) {
              return { ...applicant, status: "Rejected" };
            }
            return applicant;
          })
        );
        break;
      case "Shortlisted":
        setApplicants(
          applicants.map((applicant) => {
            if (applicant.id === e.active.id) {
              return { ...applicant, status: "Shortlisted" };
            }
            return applicant;
          })
        );
        break;
      case "Applied":
        setApplicants(
          applicants.map((applicant) => {
            if (applicant.id === e.active.id) {
              return { ...applicant, status: "Applied" };
            }
            return applicant;
          })
        );
        break;
      default:
        break;
    }
  };

  return (
    <DndContext collisionDetection={rectIntersection} onDragEnd={onDragEnd}>
      <div className="flex flex-row">
        <KanbanLane
          status="Rejected"
          applicant={applicants.filter(
            (applicant) => applicant.status === "Rejected"
          )}
        />
        <KanbanLane
          status="Applied"
          applicant={applicants.filter(
            (applicant) => applicant.status === "Applied"
          )}
        />
        <KanbanLane
          status="Shortlisted"
          applicant={applicants.filter(
            (applicant) => applicant.status === "Shortlisted"
          )}
        />
      </div>
    </DndContext>
  );
};

export default KanbanBoard;
