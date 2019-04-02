import React from 'react';
import { Table, Th, Thead } from '../styledComponent/TableComp/TableComp';
import TableRow from '../TableRow';

const Parcels = ({
  tableNames,
  parcels,
  users,
  handleEdit,
  handleCancel,
  editState,
  profileTable,
  adminTable,
  superAdminTable,
  handleInput,
  handleSelect,
  currentOption,
  editAdminStatus,
  editParcelLocation,
  editParcelStatus,
  editDropOffLocation,
  cancelParcel
}) => (
  <Table>
    <Thead data-title="all parcels">
      <tr>
        {tableNames.map(name => (
          <Th key={name}>{name}</Th>
        ))}
      </tr>
    </Thead>
    <tbody id="tableBody">
      {superAdminTable
        ? users.map(user => (
            <TableRow
              key={user.user_id}
              editState={editState}
              tableNames={tableNames}
              superAdminTable={superAdminTable}
              isAdmin={user.is_admin}
              userEmail={user.email}
              userName={user.user_name}
              userId={user.user_id}
              handleSelect={handleSelect}
              currentOption={currentOption}
              handleEdit={handleEdit}
              editAdminStatus={editAdminStatus}
            />
          ))
        : parcels.map(parcel => (
            <TableRow
              key={parcel.parcel_id}
              tableNames={tableNames}
              editParcelStatus={editParcelStatus}
              editParcelLocation={editParcelLocation}
              packageName={parcel.package_name}
              dropoffLocation={parcel.dropoff_location}
              parcelId={parcel.parcel_id}
              presentLocation={parcel.present_location}
              weight={parcel.weight}
              status={parcel.status}
              price={parcel.price}
              pickupLocation={parcel.pickup_location}
              cancelled={parcel.cancelled}
              handleCancel={handleCancel}
              profileTable={profileTable}
              adminTable={adminTable}
              editDropOffLocation={editDropOffLocation}
              cancelParcel={cancelParcel}
              handleInput={handleInput}
            />
          ))}
    </tbody>
  </Table>
);

export default Parcels;
