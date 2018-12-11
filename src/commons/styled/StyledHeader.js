import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    flex-shrink: 0;
`;
export const HeaderDiv1 = styled.div`
    background-color: #292c2f;
    box-shadow: 0 1px 1px #ccc;
    padding: 20px 40px;
    height: 80px;
    color: #ffffff;
    box-sizing: border-box;
`;
export const HeaderDiv2 = styled.div`
    background-color: #ffffff;
    box-shadow: 1px 3px 3px 0 rgba(0, 0, 0, 0.05);
    padding: 20px 40px;
`;
export const HeaderLimiter = styled.div`
    max-width: 1200px;
    text-align: center;
    margin: 0 auto;
`;
export const HeaderTitle = styled.div`
    margin-left: 38% !important;
    float: left;
    font: normal 28px Cookie, Arial, Helvetica, sans-serif;
    line-height: 40px;
    margin: 0;
`;
export const HeaderSubTitle = styled.div`
    line-height: 20px;
    margin: 0;
    float: left;
    font-size: 16px;
    color: #4e5359;
    text-decoration: none;
`;
export const HeaderNav = styled.nav`
    font: 14px Arial, Helvetica, sans-serif;
    line-height: 40px;
    float: left;
    margin: 0 0 0 60px;
    padding: 0;
`;
export const HeaderNav2 = styled.nav`
    text-align: right;
    line-height: 20px;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
export const HeaderNav2Link = styled.button`
    display: inline-block;
    color: #4e5359;
    text-decoration: none;
    cursor: pointer;
`;
export const HeaderNavLink = styled.a`
    display: inline-block;
    padding: 0 5px;
    opacity: 0.9;
    text-decoration: none;
    line-height: 1;
`;
export const LogoutButton = styled.button`
    font-size: 13px;
    font-weight: bold;
    float: right;
    border-radius: 3px;
    background-color: rgba(58, 60, 62, 0);
    height: 40px;
    padding: 0 20px;
    border: 1px solid #5e6367;
    line-height: 40px;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
`;
