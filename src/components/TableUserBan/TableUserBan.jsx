import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FaBan, FaCheck } from "react-icons/fa";
import './TableUsersBan.css';

const TableUserBan = ({ columns, data, handleActivateDeactivate }) => {

  const [page, setPage] = React.useState(1);

  const rowsPerPage = 10;


  const pages = Math.ceil(data.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data.slice(start, end);
  }, [page, data]);

  const getIcon = (type) => {
    switch (type) {
      case "activar":
        return <FaBan />;
      case "desactivar":
        return <FaCheck />;
    }
  };

  const getActionButtons = (item) => (
    <>
      <Button
        size="sm"
        className="action-buttons"
        onClick={() => handleActivateDeactivate(item.id, 'activar')}
      >
        Activar
      </Button>
      <Button
        size="sm"
        className="action-buttons"
        onClick={() => handleActivateDeactivate(item.id, 'desactivar')}
      >
        Desactivar
      </Button>
    </>
  );

  const pagination = (
    <div className="flex w-full justify-center">
      <Pagination
        isCompact
        showControls
        showShadow
        color="secondary"
        page={page}
        total={pages}
        onChange={(page) => setPage(page)}
      />
    </div>
  );

  return (
    <div className="table-users-cont">
      <Table
        aria-label="Example table with dynamic content"
        classNames={{ wrapper: "min-h-[222px]" }}
        bottomContent={pagination}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell
                  className={columnKey === "actions" ? "actions-cont" : ""}
                >
                  {columnKey === "actions"
                    ? getActionButtons(item)
                    : columnKey === "isActive"
                      ? item.isActive
                        ? "Activo"
                        : "Inactivo"
                      : item[columnKey]}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableUserBan;
