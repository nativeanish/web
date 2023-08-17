import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import React from "react";
import ArConnect from "../Image/ArConnect";
import Arweave from "../Image/Arweave-app";
import useNavbarButton from "../store/useNavbarButton";
import { connect } from "../utils/connect";

function NavBar() {
  const _type = useNavbarButton((state) => state.type);
  const setType = useNavbarButton((state) => state.setType);
  return (
    <>
      <Navbar isBordered={true}>
        <NavbarBrand>
          <p className="font-bold text-inherit">Logo </p>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <ButtonGroup variant="flat">
              <Button
                endContent={
                  _type === "arconnect" ? (
                    <ArConnect />
                  ) : _type === "arweave.app" ? (
                    <Arweave />
                  ) : null
                }
                onClick={() => connect()}
              >
                Connect with {_type}
              </Button>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Button isIconOnly>
                    <ChevronDownIcon />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Merge options"
                  selectedKeys={""}
                  selectionMode="single"
                  onSelectionChange={(e) =>
                    //@ts-ignore
                    e.currentKey === "arconnect"
                      ? setType("arconnect")
                      : //@ts-ignore
                      e.currentKey === "arweave.app"
                      ? setType("arweave.app")
                      : null
                  }
                  className="max-w-[300px]"
                >
                  <DropdownItem key="arconnect" endContent={<ArConnect />}>
                    Connect with arconnect
                  </DropdownItem>
                  <DropdownItem key="arweave.app" endContent={<Arweave />}>
                    Connect with arweave.app
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
const ChevronDownIcon = () => (
  <svg
    fill="none"
    height="14"
    viewBox="0 0 24 24"
    width="14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
      fill="currentColor"
    />
  </svg>
);
export default NavBar;
