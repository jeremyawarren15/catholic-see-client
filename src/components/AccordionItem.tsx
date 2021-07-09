import React from 'react';

interface Props {
  children?:React.ReactNode,
  headerText:string,
  parentId:string,
  adorersNeeded?:number
}

export const AccordionItem = ({
  children, headerText, parentId, adorersNeeded,
}: Props) => {
  const normalizedHeaderText = headerText.trim().toLowerCase();
  const headerId = `${normalizedHeaderText}Header`;
  const bsTarget = `#${normalizedHeaderText}`;
  const labeledBy = `${normalizedHeaderText}Heading`;

  const showAdorersNeededBadge = adorersNeeded !== undefined && adorersNeeded > 0;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={headerId}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={bsTarget}
          aria-expanded="false"
          aria-controls={normalizedHeaderText}
        >
          {headerText}
          {showAdorersNeededBadge
            && (
            <span
              className="badge rounded-pill bg-danger ms-2"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Something"
            >
              {adorersNeeded}
              {' '}
              adorers needed
            </span>
            )}
        </button>
      </h2>
      <div id={normalizedHeaderText} className="accordion-collapse collapse" aria-labelledby={labeledBy} data-bs-parent={`#${parentId}`}>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-3 accordion-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
