import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { todoActions } from "../../store";
import { Button } from "@material-ui/core";
import * as jsPDF from "jspdf";
import html2canvas from "html2canvas";

class HeaderUtils extends Component {
    archiveClick = () => {
        const { dispatch } = this.props;
        dispatch(todoActions.toggleShowArchived());
    };

    exportPdfClick = () => {
        const input = document.getElementById("divToPrint");
        html2canvas(input).then(canvas => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "JPEG", 20, 20);
            //pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
        });
    };
    
    render() {
        return (
            <Fragment>
                {this.props.showArchived ? (
                    <Button
                        color="inherit"
                        size="small"
                        onClick={this.archiveClick}
                    >
                        Show UnArchived
                    </Button>
                ) : (
                    <Button
                        color="inherit"
                        size="small"
                        onClick={this.archiveClick}
                    >
                        Show Archived
                    </Button>
                )}
                <Button
                    color="inherit"
                    size="small"
                    onClick={this.exportPdfClick}
                >
                    Export to PDF
                </Button>
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { showArchived } = state.todo;
    return {
        showArchived
    };
};

export default connect(mapStateToProps)(HeaderUtils);
