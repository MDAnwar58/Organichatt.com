import React, { Fragment } from "react";
import { RxCrossIcon } from "./Icons";

export default function ProductDetailsModal({
  modalOpenOrClose,
  closeModal,
}: any) {
  return (
    <Fragment>
      {/* <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50 ${
          modalOpenOrClose === false && "hidden"
        }`}
      />
      
      <div
        className={`fixed top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-t-md z-50 w-[70%] h-[60vh] fade-in ${
          modalOpenOrClose === false && "hidden"
        }`}
      >
        <div className="p-4 h-full overflow-y-hidden">
          <div className="modal-title flex items-center justify-between">
            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
            <button
              onClick={closeModal}
              className=" bg-gray-200 hover:bg-gray-300 transition-all text-black -mt-5 px-1 py-1 rounded-md"
            >
              <RxCrossIcon className="text-xl" />
            </button>
          </div>
          <div className="max-h-full overflow-y-auto">
            <p className="mb-4">
              Long content goes here. Long content goes here. Long content goes
              here. Long content goes here. Long content goes here. Long content
              goes here. Long content goes here. Long content goes here. Long
              content goes here. Long content goes here. Long content goes here.
              Long content goes here. Long content goes here. Long content goes
              here. Long content goes here. Long content goes here. Long content
              goes here. Long content goes here. Long content goes here. Long
              content goes here. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eaque id nihil deleniti nostrum. Aperiam
              incidunt odio facilis voluptas, dolore nobis cum placeat! Amet
              reiciendis possimus consectetur illum dolor repellat dolore
              commodi. Beatae recusandae asperiores repellendus voluptate, ex
              esse aliquam quis molestias adipisci sit possimus nesciunt
              molestiae, non laborum eveniet nostrum laboriosam aut? Expedita
              aliquam voluptatibus recusandae odit! Quisquam aliquid, quia
              consequatur maiores perspiciatis beatae neque. Corrupti, cumque
              atque sint pariatur fuga suscipit omnis aliquid magni adipisci,
              earum possimus ex debitis voluptatibus id veniam repudiandae
              perspiciatis nesciunt, hic delectus soluta odit aperiam.
              Architecto tempore quibusdam, deleniti officiis labore reiciendis
              perspiciatis voluptatibus recusandae saepe vero nesciunt expedita
              nobis obcaecati hic facere nostrum optio veritatis? Dignissimos
              doloribus mollitia accusantium voluptas explicabo odit dolore
              distinctio officia, cupiditate impedit dolor fugiat fuga sequi
              amet aliquam error et voluptate quam minima quas! Quidem quae
              aperiam doloremque voluptatibus voluptate alias sed dicta ut
              laudantium molestias deserunt fugit laboriosam, totam, inventore
              enim reiciendis magni consequatur quos. Est sapiente quo qui vero
              nihil illum ipsum illo aperiam. Est, accusamus animi. Id nihil
              impedit non dolor, unde ad eveniet magnam obcaecati itaque
              necessitatibus odio sed! Facilis inventore eius, laboriosam iusto
              amet earum. Quasi vel eveniet odit facere cum accusantium mollitia
              ipsa ducimus, reiciendis incidunt, voluptate itaque rerum iure
              facilis, enim cupiditate a quibusdam unde temporibus placeat. Nisi
              aliquid odio nesciunt tempore facilis ab quaerat modi, saepe quia
              sapiente repudiandae adipisci, ipsum temporibus sit quos iusto,
              veniam numquam doloremque. Explicabo necessitatibus dolores eaque
              adipisci et, nemo fuga quasi nihil enim molestiae cum deserunt
              voluptate doloribus soluta blanditiis! Debitis sed recusandae
              aspernatur obcaecati? Nemo, mollitia impedit dolorum accusantium
              temporibus quos, cum totam recusandae ea beatae architecto optio
              vel. Quasi reiciendis ea praesentium ullam dignissimos, dolores
              voluptatem sapiente libero dolore earum fugiat suscipit fuga
              reprehenderit quos modi id, ut explicabo quisquam consequatur
              laboriosam ab omnis! Dolore vel necessitatibus numquam incidunt
              omnis quo similique odio cupiditate labore ipsum cumque animi
              officiis est laborum architecto, doloribus, libero modi impedit
              nemo! Dolor maxime, quas eos aperiam rem consequuntur fugit
              architecto mollitia, non accusantium iusto magni saepe est sequi
              itaque harum exercitationem laudantium, quisquam cum?
              Reprehenderit velit adipisci nulla? Harum totam sint modi maxime,
              repellendus fugit tempora non quos esse, atque, culpa neque. Vel
              ex dolorem natus maiores asperiores, ipsa repellendus dolore
              beatae quisquam itaque doloremque quod, animi inventore impedit
              placeat nulla! Vero similique reprehenderit sunt, autem quae vel
              repellat ipsum asperiores! A, dolore? Similique nisi sunt, minima
              sequi corrupti consequatur corporis odit quae vel nesciunt,
              adipisci officiis modi reprehenderit tempora doloremque inventore
              delectus, error ex id totam quo architecto? Accusantium placeat
              magnam perferendis quae quod numquam quibusdam nesciunt esse
              provident corporis laudantium excepturi aut nobis nostrum maiores,
              repudiandae, exercitationem, fuga deleniti reprehenderit quos
              vitae nulla voluptatem. Quo dignissimos maxime obcaecati earum
              quis voluptatum vero, perspiciatis tempora, eveniet facilis nam
              sapiente quam laborum delectus cumque eum quia minima? Veritatis
              non ducimus, temporibus corporis, explicabo ratione repellendus
              consequatur sunt hic nobis harum odit laudantium excepturi
              doloremque? Voluptatum, cupiditate eaque! Eos vel nisi soluta
              unde, quos dolor deserunt ex cupiditate neque saepe reiciendis
              iste veritatis, doloremque explicabo repudiandae id perferendis
              illo. Rerum dignissimos doloremque iusto quis atque, nesciunt nam
              provident molestias, inventore quo quaerat cum tempora amet cumque
              animi consectetur ad. Illum fugit consectetur quod vel, rerum ipsa
              tenetur voluptas, obcaecati saepe aliquam, ut natus odio impedit
              ipsam officiis ex necessitatibus alias unde et quos cumque enim
              harum! Odit sapiente, labore voluptate ex dignissimos in sequi
              deserunt maiores ea libero amet autem dolores aspernatur dolorem!
              Provident minus magnam officia explicabo tenetur repellendus quis
              ipsum fugit vero placeat voluptates voluptatum aliquam, sit
              laudantium, qui delectus at nesciunt! Fuga aut eum soluta, fugiat
              dolores cupiditate itaque. Maiores, non illo ab perferendis
              obcaecati ipsam nihil aspernatur et qui voluptate corporis? Quo
              ipsum nam tenetur maxime natus pariatur labore, illum dolore est!
              Repellat quidem ipsa assumenda placeat dolorum est cumque, nisi
              eveniet vel, odit voluptas fugiat autem cupiditate, modi
              necessitatibus fuga nesciunt qui cum iure minus libero! Aut
              accusamus illum maiores iste quae ex sapiente laboriosam dolores
              consectetur! Illum, nobis aspernatur officiis fugiat rerum dolore
              ipsam eaque pariatur, minima et suscipit repellendus accusamus
              ducimus facilis autem ex vel error totam perferendis fugit?
              Blanditiis voluptatem sequi minima temporibus sapiente nulla,
              facere earum, veniam ratione excepturi quo consequatur dignissimos
              deserunt aliquid dolorum itaque ut. Autem, dolorem repudiandae
              tempora eveniet sint incidunt, eligendi labore cumque corrupti
              iure soluta neque fugiat quia, cum distinctio dolor quasi eaque!
              Expedita, repudiandae? Sit repellendus voluptates delectus? Magni
              molestias tempora minima perferendis natus ipsam dicta architecto
              est repellendus, eius enim tenetur. Nemo, eos tempore quos
              corporis quidem quaerat necessitatibus eum fugiat laborum dolores
              minus ipsa labore alias saepe, ea iste quisquam iure dicta id
              itaque. Necessitatibus nesciunt accusantium expedita totam quaerat
              molestias minima fugit libero, cumque consequuntur blanditiis
              illo. Esse obcaecati voluptas totam necessitatibus velit. Impedit,
              dignissimos voluptatum aliquid eaque consequatur quas omnis
              deleniti delectus, deserunt adipisci sed quidem quae ratione
              incidunt quam ad a quaerat vero corporis reiciendis eveniet?
              Assumenda obcaecati facilis nesciunt dolorem enim sit repellat
              commodi! Quo aliquid, veniam, aperiam, consequuntur porro totam
              sunt ducimus quia iusto eius nisi blanditiis inventore eaque
              doloribus temporibus dolorem minus beatae natus delectus aut
              corporis nulla animi aspernatur minima. Repellendus rerum nemo
              enim eius numquam. Harum ipsam, vitae, voluptatem alias, labore
              natus obcaecati id eligendi delectus incidunt ad ducimus quisquam
              quas voluptate ullam quis enim soluta ea ipsa hic dolorem officiis
              impedit? Accusantium possimus quisquam magni sequi, veritatis
              ullam rem praesentium debitis aperiam repellendus in architecto
              soluta fugiat culpa ipsa nesciunt voluptates natus veniam delectus
              excepturi quos deserunt mollitia illo asperiores. Quibusdam nisi
              ad aspernatur! Quod reiciendis, quis in illum est assumenda! Ipsa
              mollitia perspiciatis iure ullam odio velit atque quis error!
              Minus fuga rem recusandae consequatur? Iure ipsum dolorum magni
              aliquam eligendi dicta. Eaque cum maiores eligendi, provident
              temporibus ullam? Praesentium, minima. Cumque optio sunt debitis
              libero itaque quasi explicabo earum, sed error aspernatur,
              architecto recusandae id! Et dolor aut voluptatibus iste quaerat
              velit libero ut, distinctio ducimus est doloremque, ex nihil.
              Veritatis magnam harum vitae optio beatae ut asperiores? Dolorem?
            </p>
          </div>
          
        </div>
        <div className="modal-footer border bg-white rounded-b-md shadow-lg py-3 text-end px-5">
          <button
            className="px-5 py-2 bg-red-300 hover:bg-red-400 rounded-md"
            onClick={closeModal} // Assuming closeModal is a function defined elsewhere
          >
            Close
          </button>
        </div>
      </div> */}

      {/* Main modal */}
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          modalOpenOrClose === false ? "hidden" : "flex"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={closeModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
            {/* Modal footer */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalOpenOrClose !== false && (
        <div className="bg-gray-900/20 dark:bg-gray-900/80 fixed inset-0 z-[45]" />
      )}
    </Fragment>
  );
}
