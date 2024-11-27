namespace Desktop_TCC
{
    partial class tela_feedback
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btn_mostrar_feedbacks = new System.Windows.Forms.Button();
            this.data_grid_feedbacks = new System.Windows.Forms.DataGridView();
            this.txt_nome_usuario = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.txt_cod_usuario = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.txt_comentario_feedback = new System.Windows.Forms.TextBox();
            this.label4 = new System.Windows.Forms.Label();
            this.txt_experiencia_feedback = new System.Windows.Forms.TextBox();
            this.pictureBox2 = new System.Windows.Forms.PictureBox();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.pictureBox3 = new System.Windows.Forms.PictureBox();
            ((System.ComponentModel.ISupportInitialize)(this.data_grid_feedbacks)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox3)).BeginInit();
            this.SuspendLayout();
            // 
            // btn_mostrar_feedbacks
            // 
            this.btn_mostrar_feedbacks.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(44)))), ((int)(((byte)(107)))), ((int)(((byte)(219)))));
            this.btn_mostrar_feedbacks.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btn_mostrar_feedbacks.ForeColor = System.Drawing.SystemColors.Control;
            this.btn_mostrar_feedbacks.Location = new System.Drawing.Point(797, 108);
            this.btn_mostrar_feedbacks.Name = "btn_mostrar_feedbacks";
            this.btn_mostrar_feedbacks.Size = new System.Drawing.Size(179, 56);
            this.btn_mostrar_feedbacks.TabIndex = 0;
            this.btn_mostrar_feedbacks.Text = "Mostrar FeedBacks";
            this.btn_mostrar_feedbacks.UseVisualStyleBackColor = false;
            this.btn_mostrar_feedbacks.Click += new System.EventHandler(this.btn_mostrar_feedbacks_Click);
            // 
            // data_grid_feedbacks
            // 
            this.data_grid_feedbacks.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.data_grid_feedbacks.GridColor = System.Drawing.SystemColors.Control;
            this.data_grid_feedbacks.Location = new System.Drawing.Point(606, 194);
            this.data_grid_feedbacks.Name = "data_grid_feedbacks";
            this.data_grid_feedbacks.Size = new System.Drawing.Size(564, 386);
            this.data_grid_feedbacks.TabIndex = 1;
            this.data_grid_feedbacks.CellClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.data_grid_feedbacks_CellClick);
            this.data_grid_feedbacks.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.data_grid_feedbacks_CellContentClick);
            this.data_grid_feedbacks.Click += new System.EventHandler(this.data_grid_feedbacks_Click);
            // 
            // txt_nome_usuario
            // 
            this.txt_nome_usuario.Location = new System.Drawing.Point(33, 322);
            this.txt_nome_usuario.Name = "txt_nome_usuario";
            this.txt_nome_usuario.Size = new System.Drawing.Size(200, 20);
            this.txt_nome_usuario.TabIndex = 2;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(30, 306);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(38, 13);
            this.label1.TabIndex = 3;
            this.label1.Text = "Nome:";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(250, 306);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(95, 13);
            this.label2.TabIndex = 5;
            this.label2.Text = "Código do usuário:";
            // 
            // txt_cod_usuario
            // 
            this.txt_cod_usuario.Location = new System.Drawing.Point(253, 324);
            this.txt_cod_usuario.Name = "txt_cod_usuario";
            this.txt_cod_usuario.Size = new System.Drawing.Size(136, 20);
            this.txt_cod_usuario.TabIndex = 4;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(30, 364);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(63, 13);
            this.label3.TabIndex = 7;
            this.label3.Text = "Comentário:";
            // 
            // txt_comentario_feedback
            // 
            this.txt_comentario_feedback.Location = new System.Drawing.Point(33, 380);
            this.txt_comentario_feedback.Multiline = true;
            this.txt_comentario_feedback.Name = "txt_comentario_feedback";
            this.txt_comentario_feedback.Size = new System.Drawing.Size(200, 127);
            this.txt_comentario_feedback.TabIndex = 6;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(250, 364);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(65, 13);
            this.label4.TabIndex = 9;
            this.label4.Text = "Experiência:";
            // 
            // txt_experiencia_feedback
            // 
            this.txt_experiencia_feedback.Location = new System.Drawing.Point(253, 380);
            this.txt_experiencia_feedback.Name = "txt_experiencia_feedback";
            this.txt_experiencia_feedback.Size = new System.Drawing.Size(62, 20);
            this.txt_experiencia_feedback.TabIndex = 8;
            // 
            // pictureBox2
            // 
            this.pictureBox2.Image = global::Desktop_TCC.Properties.Resources._798b57df_fefe_4c37_9cf5_8474c0c6f5f1;
            this.pictureBox2.Location = new System.Drawing.Point(1087, -76);
            this.pictureBox2.Name = "pictureBox2";
            this.pictureBox2.Size = new System.Drawing.Size(235, 264);
            this.pictureBox2.TabIndex = 11;
            this.pictureBox2.TabStop = false;
            // 
            // pictureBox1
            // 
            this.pictureBox1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.pictureBox1.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.pictureBox1.Location = new System.Drawing.Point(67, 38);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(248, 222);
            this.pictureBox1.TabIndex = 10;
            this.pictureBox1.TabStop = false;
            this.pictureBox1.Click += new System.EventHandler(this.pictureBox1_Click);
            // 
            // pictureBox3
            // 
            this.pictureBox3.BackgroundImage = global::Desktop_TCC.Properties.Resources._8f34eca7_2360_45b9_8e99_ff25dfd21bf7;
            this.pictureBox3.Location = new System.Drawing.Point(-129, 513);
            this.pictureBox3.Name = "pictureBox3";
            this.pictureBox3.Size = new System.Drawing.Size(311, 196);
            this.pictureBox3.TabIndex = 12;
            this.pictureBox3.TabStop = false;
            // 
            // tela_feedback
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1221, 692);
            this.Controls.Add(this.pictureBox3);
            this.Controls.Add(this.pictureBox2);
            this.Controls.Add(this.pictureBox1);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.txt_experiencia_feedback);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.txt_comentario_feedback);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.txt_cod_usuario);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.txt_nome_usuario);
            this.Controls.Add(this.data_grid_feedbacks);
            this.Controls.Add(this.btn_mostrar_feedbacks);
            this.Name = "tela_feedback";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "tela_feedback";
            ((System.ComponentModel.ISupportInitialize)(this.data_grid_feedbacks)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox3)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btn_mostrar_feedbacks;
        private System.Windows.Forms.DataGridView data_grid_feedbacks;
        private System.Windows.Forms.TextBox txt_nome_usuario;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox txt_cod_usuario;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox txt_comentario_feedback;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.TextBox txt_experiencia_feedback;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.PictureBox pictureBox2;
        private System.Windows.Forms.PictureBox pictureBox3;
    }
}

