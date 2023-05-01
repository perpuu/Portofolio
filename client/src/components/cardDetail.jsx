import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function CardDetail() {
  const { id } = useParams();
  const data = useSelector((state) => {
    return state.postReducer.item;
  });
  const dataFind = data.find((el) => {
    if (el.id == id) {
      return el;
    }
  });
  return (
    <div className="bg-base-100 py-24 sm:py-32" style={{ fontFamily: "Fantasy,cursive" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {dataFind.title}
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <img
                  className="text-base font-semibold text-white"
                  src={dataFind.imgUrl}
                />
                <a
                  href={dataFind.webDeploy}
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Link Web {dataFind.title}
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              {dataFind.title}
            </h3>
            <p className="mt-6 text-base leading-7 text-white">
              Description : {dataFind.description}
            </p>
            <p className="mt-6 text-base leading-7 text-white">
              Tech Stack : {dataFind.techStack}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
