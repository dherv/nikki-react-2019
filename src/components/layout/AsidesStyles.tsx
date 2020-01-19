import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledAsideStatistics = styled.div`
  margin-top: 3rem;
  font-weight: 500;
  color: var(--color-main-light);
`;
export const StyledAsideStatisticsContainer = styled.div`
  margin: 1rem 0;
`;
export const StyledAsideStatisticsSpan = styled.span`
  margin-left: 1rem;
`;
export const StyledAsideStatisticsIcon = styled(FontAwesomeIcon)`
  width: 1rem !important;
`;
export const StyledAsideDescriptionList = styled.dl`
  font-family: var(--font-text);
  font-size: 14px;
  color: var(--font-color-title);
`;
export const StyledAsideDescriptionTitle = styled.dt`
margin: 1.25rem 0
font-family: var(--font-main);
  color: var(--font-color-title);
`;
export const StyledAsideDescription = styled.dd`
  margin: 12px 0;
`;

export const StyledAsideListItem = styled.li`
  margin: 1rem 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const StyledAsideListItemRecentDailies = styled.li`
  margin: 3rem 0;
  color: var(--font-color-main);
  h5 {
    margin: 0.5rem 0 0.75rem 0;
    font-weight: 600;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
    text-transform: lowercase;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
