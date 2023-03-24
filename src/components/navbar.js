import React from "react";
import {Button, Link, Navbar as NextUINavbar, Text, useTheme} from "@nextui-org/react";

export default function Navbar() {

    const {isDark} = useTheme();

    return (
        <NextUINavbar isBordered={isDark} variant="sticky">
            <NextUINavbar.Brand>
                <Text b color="inherit" hideIn="xs">
                    ACME
                </Text>
            </NextUINavbar.Brand>
            <NextUINavbar.Content hideIn="xs">
                <NextUINavbar.Link href="#">Features</NextUINavbar.Link>
                <NextUINavbar.Link isActive href="#">Customers</NextUINavbar.Link>
                <NextUINavbar.Link href="#">Pricing</NextUINavbar.Link>
                <NextUINavbar.Link href="#">Company</NextUINavbar.Link>
            </NextUINavbar.Content>
            <NextUINavbar.Content>
                <NextUINavbar.Link color="inherit" href="#">
                    Login
                </NextUINavbar.Link>
                <NextUINavbar.Item>
                    <Button auto flat as={Link} href="#">
                        Sign Up
                    </Button>
                </NextUINavbar.Item>
            </NextUINavbar.Content>
        </NextUINavbar>
    )
}
