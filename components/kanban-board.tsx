"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Board, Column } from "@/lib/models/model.types";
import {
  Award,
  Calendar,
  CheckCircle2,
  Mic,
  MoreVertical,
  Trash,
  XCircle,
} from "lucide-react";

type Props = {
  board: Board;
  userId: string;
};

type ColConfig = {
  color: string;
  icon: React.ReactNode;
};

const COLUMN_CONFIG: Array<ColConfig> = [
  {
    color: "bg-cyan-500",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    color: "bg-purple-500",
    icon: <CheckCircle2 className="h-4 w-4" />,
  },
  {
    color: "bg-green-500",
    icon: <Mic className="h-4 w-4" />,
  },
  {
    color: "bg-yellow-500",
    icon: <Award className="h-4 w-4" />,
  },
  {
    color: "bg-red-500",
    icon: <XCircle className="h-4 w-4" />,
  },
];

const DroppableColumn = ({
  column,
  config,
  boardId,
}: {
  column: Column;
  config: ColConfig;
  boardId: string;
}) => {
  return (
    <Card>
      <CardHeader className={`${config.color}`}>
        <div>
          <div>
            {config.icon}
            <CardTitle>{column.name}</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <MoreVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Trash /> Delete Column
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

const KanbanBoard = ({ board, userId }: Props) => {
  const columns = board.columns;

  return (
    <div>
      <div>
        {columns.map((col, key) => {
          const config = COLUMN_CONFIG[key] || {
            color: "bg-cyan-500",
            icon: <Calendar className="h-4 w-4" />,
          };
          return (
            <DroppableColumn
              key={key}
              column={col}
              config={config}
              boardId={board._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default KanbanBoard;
