import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IndexTable,
  LegacyCard,
  useIndexResourceState,
  Text,
} from "@shopify/polaris";
import React, { useEffect } from "react";
import { Button } from "@shopify/polaris";
import { EditMajor } from "@shopify/polaris-icons";

export default function SimpleIndexTableExample() {

  const navigate = useNavigate()
  const [customers, setCustomers] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/getCustomers")
      .then((data) => {
        console.table(data);
        setCustomers(data.data);
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  }, []);

  const resourceName = {
    singular: "customer",
    plural: "customers",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(customers);

  const rowMarkup = customers.map(
    (
      { first_name, last_name, email, orders_count, total_spent, phone, id },
      index
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {first_name + ' ' + last_name}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{email}</IndexTable.Cell>
        <IndexTable.Cell>
        <Text variant="bodyMd" as="span" alignment="start" numeric>
        {phone}
          </Text>
          </IndexTable.Cell>
        <IndexTable.Cell>
          <Text variant="bodyMd" as="span" alignment="start" numeric>
            {orders_count}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text variant="bodyMd" as="span" alignment="start" numeric>
            {total_spent}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text variant="bodyMd" as="span" alignment="start" numeric>
            <EditMajor  
             onClick={()=>navigate(`/edit/${id}`)}
             color="base" style={{ height:"20px" , width:"20px" }} />
          </Text>
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <LegacyCard>
      <IndexTable
        resourceName={resourceName}
        itemCount={customers.length}
        headings={[
          { title: "Name" },
          { title: "Email" },
          {
            title: (
              <Text
                as="span"
                variant="bodySm"
                fontWeight="medium"
                alignment="start"
              >
                Phone
              </Text>
            ),
          },
          {
            id: "amount-spent",
            title: (
              <Text
                as="span"
                variant="bodySm"
                fontWeight="medium"
                alignment="start"
              >
                Order Count
              </Text>
            ),
          },
          {
            id: "amount-spent",
            title: (
              <Text
                as="span"
                variant="bodySm"
                fontWeight="medium"
                alignment="start"
              >
                Amount spent
              </Text>
            ),
          },
          {
            id: "amount-spent",
            title: (
              <Text
                as="span"
                variant="bodySm"
                fontWeight="medium"
                alignment="start"
              >
                Action
              </Text>
            ),
          },
          ,
        ]}
      >
        {rowMarkup}
      </IndexTable>
    </LegacyCard>
  );
}
