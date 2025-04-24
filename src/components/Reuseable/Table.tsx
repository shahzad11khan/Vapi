import { useState } from 'react';

type Column = {
    label: string;
    key: string;
};

type Props<T> = {
    data: T[];
    columns: Column[];
    sortOptions?: string[];
    onEdit?: (item: T) => void;
    onDelete?: (item: T) => void;
    pageSize?: number;
};

function TableComponent<T extends Record<string, any>>({
    data,
    columns,
    sortOptions = [],
    onEdit,
    onDelete,
    pageSize = 5,
}: Props<T>) {
    const [sortBy, setSortBy] = useState(sortOptions[0] || '');
    const [currentPage, setCurrentPage] = useState(1);

    const sortedData = [...data].sort((a, b) => {
        if (!sortBy) return 0;
        return String(a[sortBy]).localeCompare(String(b[sortBy]));
    });

    const paginatedData = sortedData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const totalPages = Math.ceil(data.length / pageSize);

    return (
        <div className="bg-white shadow-md p-6 rounded-xl text-black">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Sort by: {sortBy}</h2>
                {sortOptions.length > 0 && (
                    <select
                        className="border rounded px-2 py-1 text-sm"
                        value={sortBy}
                        onChange={(e) => {
                            setSortBy(e.target.value);
                            setCurrentPage(1);
                        }}
                    >
                        {sortOptions.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                )}
            </div>

            <div className="overflow-auto">
                <table className="w-full table-auto text-left ">
                    <thead className="bg-gray-100">
                        <tr>
                            {columns.map((col) => (
                                <th key={col.key} className="p-3">{col.label}</th>
                            ))}
                            {(onEdit || onDelete) && <th className="p-3">Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((item, idx) => (
                            <tr key={idx} className="border-t border-gray-300 hover:bg-gray-50 ">
                                {columns.map((col) => (
                                    <td key={col.key} className="p-3">
                                        {item[col.key]}
                                    </td>
                                ))}
                                {(onEdit || onDelete) && (
                                    <td className="p-3">
                                        <div className="flex gap-2">
                                            {onEdit && (
                                                <img
                                                    src="/sidebarimages/edit.png" // Replace with your edit image path
                                                    alt="Edit"
                                                    className="cursor-pointer w-5 h-5 hover:opacity-80"
                                                    onClick={() => onEdit(item)}
                                                />
                                            )}
                                            {onDelete && (
                                                <img
                                                    src="/sidebarimages/trash.png" // Replace with your delete image path
                                                    alt="Delete"
                                                    className="cursor-pointer w-5 h-5 hover:opacity-80"
                                                    onClick={() => onDelete(item)}
                                                />
                                            )}
                                        </div>

                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-end mt-4 gap-2">
                <button
                    className="px-4 py-1 bg-gray-200 rounded disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                >
                    Prev
                </button>
                <span className="text-sm mt-1">Page {currentPage} of {totalPages}</span>
                <button
                    className="px-4 py-1 bg-gray-200 rounded disabled:opacity-50"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default TableComponent;
