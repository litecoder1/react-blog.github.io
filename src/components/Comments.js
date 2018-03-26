import React from 'react'

export const Comments = () => (
    <div id="comments">
        <h3>5 Comments</h3>
        {/* commentlist */}
        <ol className="commentlist">
            <li className="depth-1">
                <div className="avatar">
                    <img width={50} height={50} className="avatar" src="images/user-01.png" alt='alt' />
                </div>
                <div className="comment-content">
                    <div className="comment-info">
                        <cite>Itachi Uchiha</cite>
                        <div className="comment-meta">
                            <time className="comment-time" dateTime="2014-07-12T23:05">Jul 12, 2014 @ 23:05</time>
                            <span className="sep">/</span><a className="reply" href="">Reply</a>
                        </div>
                    </div>
                    <div className="comment-text">
                        <p>Adhuc quaerendum est ne, vis ut harum tantas noluisse, id suas iisque mei. Nec te inani ponderum vulputate,
      facilisi expetenda has et. Iudico dictas scriptorem an vim, ei alia mentitum est, ne has voluptua praesent.</p>
                    </div>
                </div>
            </li>
            <li className="thread-alt='alt' depth-1">
                <div className="avatar">
                    <img width={50} height={50} className="avatar" src="images/user-03.png" alt='alt' />
                </div>
                <div className="comment-content">
                    <div className="comment-info">
                        <cite>John Doe</cite>
                        <div className="comment-meta">
                            <time className="comment-time" dateTime="2014-07-12T24:05">Jul 12, 2014 @ 24:05</time>
                            <span className="sep">/</span><a className="reply" href="">Reply</a>
                        </div>
                    </div>
                    <div className="comment-text">
                        <p>Sumo euismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod
                          urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et
      tantas semper delicatissimi.</p>
                    </div>
                </div>
                <ul className="children">
                    <li className="depth-2">
                        <div className="avatar">
                            <img width={50} height={50} className="avatar" src="images/user-03.png" alt='alt' />
                        </div>
                        <div className="comment-content">
                            <div className="comment-info">
                                <cite>Kakashi Hatake</cite>
                                <div className="comment-meta">
                                    <time className="comment-time" dateTime="2014-07-12T25:05">Jul 12, 2014 @ 25:05</time>
                                    <span className="sep">/</span><a className="reply" href="">Reply</a>
                                </div>
                            </div>
                            <div className="comment-text">
                                <p>Duis sed odio sit amet nibh vulputate
                                  cursus a sit amet mauris. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate
          cursus a sit amet mauris</p>
                            </div>
                        </div>
                        <ul className="children">
                            <li className="depth-3">
                                <div className="avatar">
                                    <img width={50} height={50} className="avatar" src="images/user-03.png" alt='alt' />
                                </div>
                                <div className="comment-content">
                                    <div className="comment-info">
                                        <cite>John Doe</cite>
                                        <div className="comment-meta">
                                            <time className="comment-time" dateTime="2014-07-12T25:15">July 12, 2014 @ 25:15</time>
                                            <span className="sep">/</span><a className="reply" href="">Reply</a>
                                        </div>
                                    </div>
                                    <div className="comment-text">
                                        <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est
              etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="depth-1">
                <div className="avatar">
                    <img width={50} height={50} className="avatar" src="images/user-02.png" alt='alt' />
                </div>
                <div className="comment-content">
                    <div className="comment-info">
                        <cite>Hinata Hyuga</cite>
                        <div className="comment-meta">
                            <time className="comment-time" dateTime="2014-07-12T25:15">July 12, 2014 @ 25:15</time>
                            <span className="sep">/</span><a className="reply" href="">Reply</a>
                        </div>
                    </div>
                    <div className="comment-text">
                        <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                    </div>
                </div>
            </li>
        </ol> {/* Commentlist End */}
        {/* respond */}
        <div className="respond">
            <h3>Leave a Comment</h3>
            {/* form */}
            <form name="contactForm" id="contactForm" method="post" action>
                <fieldset>
                    <div className="group">
                        <label htmlFor="cName">Name <span className="required">*</span></label>
                        <input name="cName" type="text" id="cName" size={35} defaultValue />
                    </div>
                    <div className="group">
                        <label htmlFor="cEmail">Email <span className="required">*</span></label>
                        <input name="cEmail" type="text" id="cEmail" size={35} defaultValue />
                    </div>
                    <div className="group">
                        <label htmlFor="cWebsite">Website</label>
                        <input name="cWebsite" type="text" id="cWebsite" size={35} defaultValue />
                    </div>
                    <div className="message group">
                        <label htmlFor="cMessage">Message <span className="required">*</span></label>
                        <textarea name="cMessage" id="cMessage" rows={10} cols={50} defaultValue={""} />
                    </div>
                    <button type="submit" className="submit">Submit</button>
                </fieldset>
            </form> {/* Form End */}
        </div> {/* Respond End */}
    </div>
)