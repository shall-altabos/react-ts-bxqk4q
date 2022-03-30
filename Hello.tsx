import React from 'react';
import { PDFExport, savePDF, PDFExportProps } from '@progress/kendo-react-pdf';

export default ({ name }) => {
  const pdfExportComponent = React.useRef<PDFExport>(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <div>
      <div>
        <button
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
          onClick={exportPDFWithComponent}
        >
          Export Report
        </button>
      </div>
      <PDFExport
        ref={pdfExportComponent}
        paperSize="Letter"
        creator="Clariata LLC"
        margin={20}
        scale={0.9}
      >
        <header class="clearfix pdf-header-as-table">
          <div class="h-left">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAeCAYAAADZ7LXbAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGaADAAQAAAABAAAAHgAAAADJG2l0AAAErUlEQVRIDbWWXWibZRTHT9fatCnt0pLQ1HZZ1rVNWobdByJ+wAQRER1DhihM0QunF+K9N94LIggiA3WIzPmBiLBdKPgBXmwwJ7OjkrVpGtvONCkJbdqYrO1S6vk98X1489E5GJ6L9P14nvN/zv/8z/9t07aG/M/Rcqf5l0o3ZX2rbJb3er3S1tx8p1tlR5D1rS2ZXlmRK9mcTK2t1SX0ezwS6eqSwwG/7O3srHvvftDUiK7pfF7OJWalpEDEoZ4eGfC22308n1ktyEKpaJ5FFezxgf4dwepAvk3+KRezWfEqHY/1BeWg3y/5zU2Zc1UT7OiQYHsF9OfUolkP2ov7B2Vc19dGFcjlpSX5em5eQt4OeX5oUC6mMzZB7UbuWffEnn7xtXrkx1TKVHu0v79uaRUIzb2UycgBpedsImHogor7lXef9sCJ/MaGJNcK9gDQeWJw345iqAIhCf34aDpu6Hpqz4BEfT65pBWmiiUHQ9pbWuRAt0/6lLYf/krJ78vLpqpXx6INgapAqOSDWMwke31sTK7msvKTUkbQo5AmLZW3bMN5dnJov8SWV0xVVHRyeMisd/9USfir2aSh6I2xUUMbAoD34+GQ8t5qBMBmridyOXMAqqbhKI6KHikU6lRmK3FoOqZSJC4oDQ8HAvJQMCgX5ufrZgXlHdH3XyaSprLXIhFZLP5t1Ljb1T9y7eKHQJLPhveaRVDEsB3RhkMfwwjgqciIWcM71gDwjO4hfkmnJawiOX19SlZVGO6wIKCj8U/jFVU9rU3//F/6SE5FBGvePDhuQBnG5NqqueYgBZ2nnALMKWXusD0BHQA2QsWNYtFsoLqMXsO9E/TpOe3DtCamItYTnuZKOiTuDlsJZToAh/0Bs5lkGCH9YV4QBAlZ90k8Lg8qnTTcsfHW5kq6GZ0hd9hK4JaEOOyHsSmzBlV9oZQh1RdGhuWz+IwMd1XMEFqcSKv0CVTXKGwlER26Ni33vck/zEmR5VV1YJJxehy51o0dAy3cumUO4qiKYXWHBcG33pmcNEkBcGwDyjDJb9TTqGhUB45AYTgxf3c1NZlBZZgJt2Nzb0ESyiMbjN5LJTPBALw0MmQVd0IpPa9gBPTSG/YQOAEOQUS7KwcxN/pj68IOOAlTz2YA8KLv5hfMPXOyqODOzEAvQY+WNzb1eVbuUz9DIL2ubw9rLMg1tQkogWem/gGdCwQAIACDmuysHgDwzntaBHoJlMQHCwtK6HwgkNqwdPGZJZAp5TYCoCfQ9/1iWqAXQ6QyVMVBuL6sn4rasJW8Mho17/CwMzp4TkV8R6gAAJyZryRBc7ERTPFdVSRufG+HV8KdXea9+8dWwkN64kz2y7oJrt0AcM0cEbzjHwjHgdnHt6e2H6y1lXDTphNLPwJqlucXbhg508ijfX3m83qzXDaN5hk9wM/wsrCCTSkDnpr5ICdhrb5yW/n9GItRv2IIHbrc7x/t7ZVfVShQink6SnOvcV83BMEsORU28/bENZ2BsgGkB+/Hrpv+nNLvx7nZWRnv6ZYnQyF3zvpr/u+6XWSKpe38+rpdMpHNbr915bdtpc4++6+LhpXUH+XunlSp6+5S7bz7HxhSwTLf3RWRAAAAAElFTkSuQmCC" />
            <p>The Story Of Us</p>
          </div>
          <div class="h-right">
            <div class="hr-wrapper clearfix">
              <p>Joe &amp; Jane </p>
              <img
                width="50px"
                src="https://clariata-upload.s3.us-east-2.amazonaws.com/8ef33a35-ab84-48d1-8f5b-f6e87c96a1ee.jpeg?X-Amz-Expires=86400&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAZMEDXWAWS5ZJMNLB/20220330/us-east-2/s3/aws4_request&amp;X-Amz-Date=20220330T033753Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=256d1ad7d570dbe425bd6a58aada3af660edf4414928ef7574d36d9529b99aac"
              ></img>
            </div>
          </div>
        </header>
        <div className="ppw-top">
          <div className="bc-row">
            <div className="bcr-top storyofus">Our Story</div>
            <div className="bcr-bottom">
              <div className="bcr-content">
                <h3>MARRIAGE Date</h3>
                <p>April 1, 1990</p>
              </div>
              <div className="bcr-content">
                <h3>HOW WE MET</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{' '}
                </p>
              </div>
              <div className="bcr-content">
                <h3>OUR WEDDING</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi.{' '}
                </p>
              </div>
              <div className="bcr-content">
                <h3>OUR FONDEST MEMORY</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                  nulla. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Curabitur sodales
                  ligula in libero.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="bc-row">
            <div className="bcr-top storyofus">Our Legacy and Our Advice</div>
            <div className="bcr-bottom">
              <div className="bcr-content">
                <h3>OUR JOURNEY</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.{' '}
                </p>
              </div>
              <div className="bcr-content">
                <h3>OUR ADVICE</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum. Praesent mauris.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="bc-row">
            <div className="bcr-top storyofus">Rituals and Traditions</div>
            <div className="bcr-bottom">
              <div className="bcr-content">
                <h3>FAVORITE FAMILY HOLIDAYS</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi.{' '}
                </p>
              </div>
              <div className="bcr-content">
                <h3>NEW FAMILY HOLIDAYS</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi.{' '}
                </p>
              </div>
              <div className="bcr-content">
                <h3>FAVORITE TRADITIONS</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi.{' '}
                </p>
              </div>
              <div className="bcr-content">
                <h3>NEW TRADITIONS</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi.{' '}
                </p>
              </div>
              <div className="bcr-content">
                <h3>RELIGION</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>
          </div>
        </div>
      </PDFExport>
    </div>
  );
};
