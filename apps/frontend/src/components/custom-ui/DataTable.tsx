import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { UsersGuidesStatistics } from 'shared-types';
import { GuideProgressBadge } from './GuideProgressBadge';
import { GuideStepStatus } from 'database/enums';
import { GuideStatus } from 'database/enums';

export function DataTable({ data }: { data: UsersGuidesStatistics }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Status</TableHead>
                    <TableHead>Count</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Object.entries(data).map(([key, value]) => (
                    <TableRow key={key}>
                        <TableCell>
                            <GuideProgressBadge
                                progressStatus={
                                    key as GuideStatus | GuideStepStatus
                                }
                            />
                        </TableCell>
                        <TableCell>{value}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
